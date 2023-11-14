import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import options from 'components/services/options';

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
  // console.log('location MovieDetails:', location);

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  // console.log('backLinkLocationRef SearchMovie:', backLinkLocationRef);

  return (
    <>
      {query && (
        <div>
          {<Link to={backLinkLocationRef.current}>Go back</Link>}
          <div>
            <br />
            <img
              src={`https://image.tmdb.org/t/p/w500/${query.poster_path}`}
              alt={query.title}
              width="200px"
            />
            <h2>{query.title}</h2>
            <p>
              <span>User Score: </span>??%
            </p>
            <p>
              <span>
                <b>Overview</b>
              </span>{' '}
              {query.overview}
            </p>
            <p>
              <span>
                <b>Genres</b>
              </span>{' '}
              {query.genres.map(item => `${item.name} `)}
            </p>
          </div>
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
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
