import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchMovie from '../../pages/SearchMovie/SearchMovie';
// import { AppWrap, Link } from '../Layout/Layout.styled';
import NotFound from '../NotFound/NotFound';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Layout from 'components/Layout/Layout';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchMovie />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
