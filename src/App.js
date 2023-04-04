import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import React from "react";
import PostDetail from "./components/PostDetail";

function App() {

  return (
      <div>
        <h2>MENU</h2>
        <ul>
          <Link to={'/'}>
            <li>HOME</li>
          </Link>
          <Link to={'/layout'}>
            <li>LAYOUT</li>
          </Link>
          <Link to={'/about'}>
            <li>ABOUT</li>
          </Link>
        </ul>
        <h2>CONTENT</h2>
        <Routes>
          <Route index element={<Home/>}/>

          <Route path={'/layout'} element={<Layout/>}>

            <Route path={'users'} element={<Users/>}>
              <Route path={':id'} element={<UserDetail/>}/>
            </Route>

            <Route path={'posts'} element={<Posts/>}>
              <Route path={':id'} element={<PostDetail/>}/>
            </Route>

            <Route path={'comments'} element={<Comments/>}/>
          </Route>

          <Route path={'/about'} element={<About/>}/>
        </Routes>
      </div>
  )
}

export default App;
