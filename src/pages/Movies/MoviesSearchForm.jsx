import React, { useState } from 'react';
import { MoviesForm, MoviesInput, MoviesButton } from './Movies.styled';

export default function MoviesSearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.trim());
    return e.target.value.trim();
  };

  return (
    <MoviesForm onSubmit={onSubmit}>
      <MoviesInput
        onChange={handleChange}
        value={query}
        type="text"
        id="searchQuery"
        name="searchQuery"
        placeholder="Enter movie name to search"
      />
      <MoviesButton type="submit">Search</MoviesButton>
    </MoviesForm>
  );
}
