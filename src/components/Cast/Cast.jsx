import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import stubLittle from '../../stubs/stub_little.jpg';
import { CastList, CastItem, CastImg, CastP } from './Cast.styled.js';
import { fetchCastData } from '../services/castService.js';

export default function Cast() {
  const params = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const castData = await fetchCastData(params.movieId);
        setCast(castData);
      } catch (error) {
        console.error('Error setting cast data:', error);
      }
    };

    fetchData();
  }, [params.movieId]);

  return (
    <>
      {console.log(cast)}
      {cast ? (
        <CastList>
          {cast.cast.map(item => (
            <CastItem key={item.id}>
              <CastImg
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : stubLittle
                }
                alt={item.name}
              />
              <CastP>{item.name}</CastP>
              <CastP>
                <b>Character:</b> {item.character}
              </CastP>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>We don't have any cast info for this movie</p>
      )}
    </>
  );
}
