import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppWrap = styled.nav`
  display: flex;
  width: 100%;
  border-bottom: 1px solid grey;
`;

export const Link = styled(NavLink)`
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
