import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchMovie from '../SearchMovie/SearchMovie';
import Trending from 'components/Trending/Trending';
import { AppWrap, Link } from './App.styled';
import fetchData from '../services/themoviedb-API';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData;
        console.log(result);
        setData(result);
        // Обработайте данные, как вам нужно
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <AppWrap>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </AppWrap>
      <Routes>
        <Route path="/" element={<Trending data={data} />} />
        <Route path="/movies" element={<SearchMovie />} />
      </Routes>
    </div>
  );
}
