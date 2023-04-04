import React from 'react';
import {Link} from "react-router-dom";


const UserComponent = ({item}) => {

  let {id, name, email} = item
  return (
      <div>
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
        <Link to={id.toString()} state={{...item}}>detail</Link>
      </div>
  );
};

export default UserComponent;