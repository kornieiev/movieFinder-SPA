import React, { useEffect, useState, useRef } from 'react';
import { Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import options from 'components/services/options';
import {
  ButtonLink,
  MovieWrap,
  MovieInfoWrap,
  OverviewWrap,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const params = useParams();
  const [query, setQuery] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setQuery(response);
      })
      .catch(err => console.error(err));
  }, [params.movieId]);

  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  return (
    <>
      {query && (
        <div>
          {<ButtonLink to={backLinkLocationRef.current}>← Go back</ButtonLink>}
          <MovieWrap>
            <br />
            <img
              src={`https://image.tmdb.org/t/p/w500/${query.poster_path}`}
              alt={query.title}
              width="200px"
            />
            <MovieInfoWrap>
              <h2>{query.title}</h2>
              <p>
                <span>User Score: </span>??%
              </p>
              <OverviewWrap>
                <h3>
                  <b>Overview</b>
                </h3>
                <p>{query.overview}</p>
              </OverviewWrap>

              <div>
                <p>
                  <span>
                    <b>Genres</b>
                  </span>{' '}
                  {query.genres.map(item => `${item.name} `)}
                </p>
              </div>
            </MovieInfoWrap>
          </MovieWrap>
          <hr />
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <hr />
            <Suspense fallback={<div>Loading...............</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
}
