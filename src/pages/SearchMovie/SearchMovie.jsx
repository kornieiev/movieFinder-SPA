import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoviesWrap, MoviesForm } from './SearchMovie.styled';
import { Formik, Field, Form } from 'formik';
import options from 'components/services/options';
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
        setSearchList(response.results);
        initialValues.searchQuery = '';
      })
      .catch(err => console.error(err));
  }, [query]);

  const location = useLocation();
  console.log('location SearchMovie:', location);

  const handleSubmit = (value, { resetForm }) => {
    setQuery(value.searchQuery);
    resetForm();
  };

  return (
    <>
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
