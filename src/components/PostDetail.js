import React, {useEffect, useState} from 'react';
import ApiService from "../service/apiService.";
import {useParams} from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState({})
  const apiService = new ApiService('posts')
  const params = useParams()
  const {id} = params

  useEffect(()=>{
    apiService.getSingleData(id).then((data)=>setPost(data))
  },[id])

  return (
      <div>
        <h2 style={{color: 'red'}}>Title: {post.title}</h2>
        <p>Body: {post.body} </p>

      </div>
  );
};

export default PostDetail;