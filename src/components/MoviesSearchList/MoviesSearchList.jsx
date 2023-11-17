import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MoviesSearchList({ searchList, link }) {
  const location = useLocation();

  if (!link) {
    link = '';
  }

  return (
    <>
      <ul>
        {searchList &&
          searchList.map(item => (
            <li key={item.id}>
              <Link to={`${link + item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
