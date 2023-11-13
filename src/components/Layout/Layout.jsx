import { Outlet } from 'react-router-dom';

import { AppWrap, Link } from './Layout.styled.js';

import React from 'react';

export default function Layout() {
  return (
    <>
      <header>
        <AppWrap>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </AppWrap>
      </header>
      <main>
        <Outlet />
      </main>
      <hr />
      <footer>
        <h3>FOOTER</h3>
      </footer>
    </>
  );
}
