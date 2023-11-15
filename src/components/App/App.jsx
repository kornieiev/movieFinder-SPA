import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import SearchMovie from '../../pages/SearchMovie/Movies';
// import NotFound from '../NotFound/NotFound';
// import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Layout from 'components/Layout/Layout';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

import { AppMainDiv } from './App.styled';

const Home = lazy(() => import('../../pages/Home'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const SearchMovie = lazy(() => import('../../pages/Movies/Movies'));
const NotFound = lazy(() => import('../../components/NotFound/NotFound'));
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

export default function App() {
  return (
    <AppMainDiv>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchMovie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppMainDiv>
  );
}
