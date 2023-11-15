import { ThreeDots } from 'react-loader-spinner';
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
        <Suspense
          fallback={
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </LayoutMain>
      <hr />
      <LayoutFooter>
        <LayoutNavLink to="/" end>
          Home
        </LayoutNavLink>
        <LayoutNavLink to="/movies">Movies</LayoutNavLink>
      </LayoutFooter>
    </>
  );
}
