import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
  display: inline-block;
  padding: 3px 5px;
  background-color: #e5e5d7;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;

export const MovieWrap = styled.div`
  display: flex;
`;

export const MovieInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const OverviewWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OverviewP = styled.p`
  color: darkgreen;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  max-width: 500px;
`;

export const AboutP = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  max-width: 500px;
  border: 1px solid grey;
  background-color: lightgrey;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
`;

export const MovieDetailsImg = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
`;

export const MovieNameH2 = styled.h2`
  color: darkred;
  margin-top: 0px;
  margin-bottom: 0px;
  text-shadow: 1px 3px 3px rgb(189 89 89 / 50%);
`;

export const OverviewH3 = styled.h3`
  margin-top: 5px;
  margin-bottom: 0px;
`;
