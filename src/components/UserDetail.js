import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetail = () => {
  let location = useLocation()
  let {state: user} = location
  return (
      <div>
        <h2 style={{color: 'red'}}>User Details</h2>
        <p> ID: {user.id}</p>
        <p> Name: {user.name}</p>
        <p> EMAIL: {user.email}</p>
      </div>
  );
};

export default UserDetail;