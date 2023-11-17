import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesSearchList({ searchList, state }) {
  return (
    <>
      <ul>
        {searchList &&
          searchList.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`} state={state}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
