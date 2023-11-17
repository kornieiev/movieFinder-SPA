import { ThreeDots } from 'react-loader-spinner';
import React, { useEffect, useState, useRef } from 'react';
import { Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {
  ButtonLink,
  MovieWrap,
  MovieInfoWrap,
  OverviewWrap,
  OverviewP,
  MovieDetailsImg,
} from './MovieDetails.styled';
import stubBig from '../../stubs/stub_big.jpg';
import { fetchMovieDetailsData } from '../../services/movieDetailsService';

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
              <>
                <MovieDetailsImg
                  src={
                    movieDetails.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                      : stubBig
                  }
                  alt={movieDetails.title}
                />
              </>
            }
            <MovieInfoWrap>
              <h2>{movieDetails.title}</h2>
              <OverviewP>
                <span>Vote average: </span>
                {movieDetails.vote_average.toFixed(1)} / 10
              </OverviewP>
              <OverviewWrap>
                <h3>
                  <b>Overview</b>
                </h3>
                <OverviewP>{movieDetails.overview}</OverviewP>
              </OverviewWrap>

              <div>
                <OverviewP>
                  <b>Genres: </b>
                  {movieDetails.genres.map(item => `${item.name} `)}
                </OverviewP>
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
