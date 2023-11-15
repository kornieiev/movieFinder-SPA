import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  MoviesWrap,
  MoviesForm,
  MoviesInput,
  MoviesButton,
} from './Movies.styled';
import options from 'components/services/options';

export default function SearchMovie() {
  const [searchParams, setSearchParams] = useSearchParams('');
  let searchValue = searchParams.get('query') ?? '';
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    console.log();
    if (location.pathname === '/movies' && searchValue) {
      setQuery(searchValue);
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then(response => response.json())
        .then(response => {
          setSearchList(response.results);
        })
        .catch(err => console.error(err));
    }
  }, [location.pathname, query, searchValue]);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.searchQuery.value);
    setSearchParams({ query: e.target.searchQuery.value });
  };

  const handleInputChange = e => {
    e.preventDefault();
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  return (
    <>
      <MoviesWrap>
        <MoviesForm onSubmit={handleSubmit}>
          <MoviesInput
            onChange={handleInputChange}
            value={searchValue}
            type="text"
            id="searchQuery"
            name="searchQuery"
            placeholder="Enter movie name to search"
          />
          <MoviesButton type="submit">Search</MoviesButton>
        </MoviesForm>
        <ul>
          {searchList &&
            searchList.map(item => (
              <li key={item.id}>
                <Link to={`${item.id}`} state={{ from: location }}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </MoviesWrap>
    </>
  );
}
