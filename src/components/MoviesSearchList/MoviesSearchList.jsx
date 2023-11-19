import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MoviesSearchList({ searchList }) {
  const location = useLocation();

  return (
    <>
      <ul>
        {searchList &&
          searchList.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
