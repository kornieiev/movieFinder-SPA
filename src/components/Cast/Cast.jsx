import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import options from '../services/options.js';

export default function Cast() {
  const params = useParams();
  const [query, setQuery] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setQuery(response);
      })
      .catch(err => console.error(err));
  }, [params.movieId]);

  return (
    <>
      {query && (
        <ul>
          {query.cast.map(item => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
                width="90px"
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
