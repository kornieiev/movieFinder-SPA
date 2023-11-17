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
      {cast && (
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
                width="90px"
                height="135px"
              />
              <CastP>{item.name}</CastP>
              <CastP>
                <b>Character:</b> {item.character}
              </CastP>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
}
