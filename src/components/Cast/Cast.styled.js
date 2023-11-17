import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;

  @media screen and (min-width: 900px) {
    grid-template-columns: 200px 200px 200px 200px 200px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 200px 200px 200px;
  }

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
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);
  width: 90px;
  height: 135px;
  margin-bottom: 5px;
`;

export const CastP = styled.p`
  margin: 0;
  padding: 3px;
  font-family: 'DM Sans', sans-serif;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
`;
