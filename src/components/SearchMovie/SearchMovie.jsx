import React from 'react';
import { MoviesWrap, MoviesForm } from './SearchMovie.styled';

export default function SearchMovie() {
  return (
    <MoviesWrap>
      <MoviesForm>
        <input type="text" />
        <button type="submit">Search</button>
      </MoviesForm>
    </MoviesWrap>
  );
}
