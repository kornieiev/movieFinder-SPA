import React, { useState, useEffect } from 'react';
import { fetchHomeData } from '../services/homeService';
import MoviesSearchList from '../components/MoviesSearchList/MoviesSearchList';

const Home = () => {
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHomeData();
        setMovie(data.results);
      } catch (error) {
        console.error('Error setting cast data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movie && <MoviesSearchList searchList={movie} />}
    </>
  );
};

export default Home;
