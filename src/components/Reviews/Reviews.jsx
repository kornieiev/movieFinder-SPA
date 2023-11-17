import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import options from '../services/options.js';

export default function Reviews() {
  const params = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movieId}/reviews?language=en-US&page=1`,
          options
        );
        const result = await response.json();
        setReviews(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReviewsData();
  }, [params.movieId]);

  return (
    <>
      {reviews.total_results > 0 ? (
        <ul>
          {reviews.results.map(item => (
            <li key={item.id}>
              <h4>Author: {item.author}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>`We don't have any reviews for this movie`</p>
      )}
    </>
  );
}
