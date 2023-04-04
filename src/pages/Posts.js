import React, {useEffect, useState} from 'react';
import ApiService from "../service/apiService.";
import PostComponent from "../components/PostComponent";
import {Outlet} from "react-router-dom";

const Posts = () => {

  let [posts, setPosts] = useState([])

  let apiService = new ApiService('posts')
  useEffect(() => {
    apiService.getAllData().then(data => setPosts([...data]))
  }, [])

  return (
      <div>
        <h1>Posts</h1>
        <Outlet/>
        {posts.map(post => <PostComponent key={post.id} item={post}/>)}
        <hr/>
      </div>
  );
};

export default Posts;