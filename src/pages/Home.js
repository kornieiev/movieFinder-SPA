import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import options from 'components/services/options';

const Home = () => {
  const [trending, setTrending] = useState('');
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => {
        setTrending(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trending &&
          trending.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
