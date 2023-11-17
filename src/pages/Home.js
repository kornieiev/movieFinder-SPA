import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchHomeData } from '../components/services/homeService';

const Home = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const castData = await fetchHomeData();
        setQuery(castData);
      } catch (error) {
        console.error('Error setting cast data:', error);
      }
    };

    fetchData();
  }, []);

  const location = useLocation();

  return (
    <>
      <h1>Trending today</h1>
      {query && (
        <ul>
          {query.results.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
