import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import options from '../services/options.js';
import stubLittle from '../../stubs/stub_little.jpg';

export default function Cast() {
  const params = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movieId}/credits?language=en-US`,
          options
        );
        const result = await response.json();
        setCast(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCastData();
  }, [params.movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.cast.map(item => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : stubLittle
                }
                alt={item.name}
                width="90px"
                height="135px"
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
