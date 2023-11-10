import React from 'react';
import { TrendingWrap, TrendingTitle } from './Trending.styled';

export default function Trending() {
  return (
    <TrendingWrap>
      <TrendingTitle>Trending today</TrendingTitle>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </TrendingWrap>
  );
}
