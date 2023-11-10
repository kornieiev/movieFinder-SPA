import { Routes, Route } from 'react-router-dom';
import SearchMovie from '../SearchMovie/SearchMovie';
import Trending from 'components/Trending/Trending';
import { AppWrap, Link } from './App.styled';

export const App = () => {
  return (
    <div>
      <AppWrap>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </AppWrap>
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<SearchMovie />} />
      </Routes>
    </div>
  );
};
