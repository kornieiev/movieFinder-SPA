import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import options from '../services/options.js';

export default function Reviews() {
  const params = useParams();
  const [query, setQuery] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}/reviews?language=en-US&page=1`,
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
      {console.log('reviews query:', query)}
      {query && query.results.length > 0 ? (
        <ul>
          {query.results.map(item => (
            <li key={item.id}>
              <h4>Author: {item.author}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        `We don't have any reviews for this movie`
      )}
    </>
  );
}
