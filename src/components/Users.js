import React, {useEffect, useState} from 'react';
import ApiService from "../service/apiService.";
import UserComponent from "./UserComponent";
import {Outlet} from "react-router-dom";

const Users = () => {
  let [users, setUsers] = useState([])
  let apiService = new ApiService('users')

  useEffect(() => {
    apiService.getAllData().then(data => setUsers([...data]))
  }, [])

  return (
      <div>
        <h1>Users</h1>
        {users.map(user => <UserComponent key={user.id} item={user}/>)}
        <hr/>
        <div>
          <h3>Details about user</h3>
          <Outlet/>
        </div>
      </div>
  );
};

export default Users;