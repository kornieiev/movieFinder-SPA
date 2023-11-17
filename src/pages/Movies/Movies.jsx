import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MoviesWrap } from './Movies.styled';
import { fetchMoviesData } from '../../components/services/moviesService';
import MoviesSearchForm from './MoviesSearchForm';
import MoviesSearchList from './MoviesSearchList';

export default function SearchMovie() {
  const [searchParams, setSearchParams] = useSearchParams('');
  let searchValue = searchParams.get('movie') ?? '';
  const [movie, setMovie] = useState(searchValue);
  const [searchList, setSearchList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchMoviesData(movie);
        setSearchList(moviesData);
      } catch (error) {
        console.error('Error setting cast data:', error);
      }
    };

    fetchData();
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
            searchList={searchList.results}
            state={{ from: location }}
          />
        )}
      </MoviesWrap>
    </>
  );
}
