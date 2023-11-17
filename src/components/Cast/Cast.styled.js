import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px;
  justify-content: center;
`;

export const CastItem = styled.li`
  list-style: none;
  border: 0.5px solid lightgrey;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const CastImg = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

export const CastP = styled.p`
  margin: 0;
  padding: 3px;
  font-family: 'DM Sans', sans-serif;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
`;
