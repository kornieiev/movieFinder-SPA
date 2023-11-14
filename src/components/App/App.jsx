import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchMovie from '../../pages/SearchMovie/SearchMovie';
import NotFound from '../NotFound/NotFound';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Layout from 'components/Layout/Layout';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="movies/:movieId" element={<MovieDetails />}></Route>
          <Route path="movies" element={<SearchMovie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
