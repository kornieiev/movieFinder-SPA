import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MoviesWrap } from './Movies.styled';
import options from 'components/services/options';
import MoviesSearchForm from './MoviesSearchForm';
import MoviesSearchList from './MoviesSearchList';

export default function SearchMovie() {
  const [searchParams, setSearchParams] = useSearchParams('');
  let searchValue = searchParams.get('movie') ?? '';
  const [movie, setMovie] = useState(searchValue);
  const [searchList, setSearchList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setSearchList(response.results);
      })
      .catch(err => console.error(err));
  }, [movie]);

  const handleSubmit = e => {
    e.preventDefault();
    setMovie(e.target.searchQuery.value);
    setSearchParams({ movie: e.target.searchQuery.value });
  };

  return (
    <>
      <MoviesWrap>
        <MoviesSearchForm onSubmit={handleSubmit} />
        {searchList && (
          <MoviesSearchList
            searchList={searchList}
            state={{ from: location }}
          />
        )}
      </MoviesWrap>
    </>
  );
}
