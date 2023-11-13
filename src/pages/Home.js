import React, { useState, useEffect } from 'react';
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
        console.log(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <ul>
        {trending && trending.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </>
  );
};

export default Home;
