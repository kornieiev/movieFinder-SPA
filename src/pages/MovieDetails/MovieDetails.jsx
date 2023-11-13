import options from 'components/services/options';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        console.log(response);
        setQuery(response);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      {query && (
        <div>
          <br />
          <img
            src={`https://image.tmdb.org/t/p/w500/${query.poster_path}`}
            alt={query.title}
            width="300px"
          />
          <h3>{query.title}</h3>
          <p>{query.overview}</p>
        </div>
      )}
    </>
  );
}
