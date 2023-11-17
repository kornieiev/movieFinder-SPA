import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsData } from '../../services/reviewsService.js';

export default function Reviews() {
  const params = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsData = await fetchReviewsData(params.movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error setting cast data:', error);
      }
    };

    fetchData();
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
