import { ThreeDots } from 'react-loader-spinner';
import React, { useEffect, useState, useRef } from 'react';
import { Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {
  ButtonLink,
  MovieWrap,
  MovieInfoWrap,
  OverviewWrap,
} from './MovieDetails.styled';
import stubBig from '../../stubs/stub_big.jpg';
import { fetchMovieDetailsData } from '../../components/services/movieDetailsService';

export default function MovieDetails() {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MovieDetailsData = await fetchMovieDetailsData(params.movieId);
        setMovieDetails(MovieDetailsData);
      } catch (error) {
        console.error('Error setting cast data:', error);
      }
    };

    fetchData();
  }, [params.movieId]);

  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  return (
    <>
      {movieDetails && (
        <div>
          {<ButtonLink to={backLinkLocationRef.current}>← Go back</ButtonLink>}
          <MovieWrap>
            <br />
            {
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                    : stubBig
                }
                alt={movieDetails.title}
                width="200px"
                height="300px"
              />
            }
            <MovieInfoWrap>
              <h2>{movieDetails.title}</h2>
              <p>
                <span>Vote average: </span>
                {movieDetails.vote_average.toFixed(1)} / 10
              </p>
              <OverviewWrap>
                <h3>
                  <b>Overview</b>
                </h3>
                <p>{movieDetails.overview}</p>
              </OverviewWrap>

              <div>
                <p>
                  <span>
                    <b>Genres: </b>
                  </span>
                  {movieDetails.genres.map(item => `${item.name} `)}
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
            <Suspense
              fallback={
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#4fa94d"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              }
            >
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
}
