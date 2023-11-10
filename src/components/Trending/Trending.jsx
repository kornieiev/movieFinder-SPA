import React from 'react';
import { TrendingWrap, TrendingTitle } from './Trending.styled';

export default function Trending({ data }) {
  return (
    <TrendingWrap>
      <TrendingTitle>Trending today</TrendingTitle>
      <ul>
        {data &&
          data.results.map(item => (
            <li key={item.id}>{item.original_title}</li>
          ))}
      </ul>
    </TrendingWrap>
  );
}
