import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import options from 'components/services/options';

const Home = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => {
        setQuery(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  const location = useLocation();
  console.log('location Home:', location);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {query &&
          query.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
