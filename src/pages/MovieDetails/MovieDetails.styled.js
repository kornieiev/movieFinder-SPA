import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  margin-top: 10px;
  display: inline-block;
  padding: 3px 5px;
  background-color: white;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 12px;
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
