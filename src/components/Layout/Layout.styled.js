import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LayoutNav = styled.nav`
  display: flex;
  width: 100%;
  border-bottom: 1px solid grey;
`;

export const LayoutNavLink = styled(NavLink)`
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  font-size: 18px;
  margin-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  &.active {
    color: orangered;
  }
`;

export const LayoutFooter = styled.footer`
  background-color: #f0f0f0;
  padding: 10px;
  /* text-align: center; */
`;

export const LayoutHeader = styled.header`
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0px 1px 7px 4px rgba(0, 0, 0, 0.3);
`;

export const LayoutMain = styled.main`
  flex: 1;
  margin-left: 20px;
`;
