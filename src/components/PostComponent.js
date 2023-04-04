import React from 'react';
import { useNavigate} from "react-router-dom";

const PostComponent = ({item}) => {
  let {id, title} = item
let navigator = useNavigate()

  return (
      <div>
        <p>Title: {title}</p>
        <button onClick={()=> navigator(id.toString())} >post detail</button>
      </div>
  );
};

export default PostComponent;