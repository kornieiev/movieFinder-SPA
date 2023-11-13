import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoviesWrap, MoviesForm } from './SearchMovie.styled';
import { Formik, Field, Form } from 'formik';
import options from 'components/services/options';
//
// "/movies/:movieId"
// http://localhost:3000/goit-react-hw-05-movies/movies
//
export default function SearchMovie() {
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState('');

  const initialValues = {
    searchQuery: '',
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log('response:', response);
        setSearchList(response.results);
        initialValues.searchQuery = '';
      })
      .catch(err => console.error(err));
  }, [query]);

  const handleSubmit = (value, { resetForm }) => {
    setQuery(value.searchQuery);
    resetForm();
  };

  return (
    <MoviesWrap>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <MoviesForm>
          <Field
            type="text"
            id="searchQuery"
            name="searchQuery"
            placeholder="Enter movie name to search"
          />
          <button type="submit">Search</button>
        </MoviesForm>
      </Formik>
      <ul>
        {searchList &&
          searchList.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </MoviesWrap>
  );
}
