import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
  return (
      <div>
        <h1>Sub Menu</h1>
        <ul>
          <Link to={'users'}>
            <li>user page</li>
          </Link>
          <Link to={'posts'}>
            <li>all posts</li>
          </Link>
          <Link to={'comments'}>
            <li>comments</li>
          </Link>
        </ul>
        <Outlet/>
      </div>
  );
};

export default Layout;