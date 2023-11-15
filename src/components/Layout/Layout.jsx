import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  LayoutNav,
  LayoutNavLink,
  LayoutFooter,
  LayoutMain,
  LayoutHeader,
} from './Layout.styled.js';
import React from 'react';

export default function Layout() {
  return (
    <>
      <LayoutHeader>
        <LayoutNav>
          <LayoutNavLink to="/" end>
            Home
          </LayoutNavLink>
          <LayoutNavLink to="/movies">Movies</LayoutNavLink>
        </LayoutNav>
      </LayoutHeader>
      <LayoutMain>
        <Suspense fallback={<div>Loading...............</div>}>
          <Outlet />
        </Suspense>
      </LayoutMain>
      <hr />
      <LayoutFooter>
        {/* <h3>FOOTER</h3>
         */}
        <LayoutNavLink to="/" end>
          Home
        </LayoutNavLink>
        <LayoutNavLink to="/movies">Movies</LayoutNavLink>
      </LayoutFooter>
    </>
  );
}
