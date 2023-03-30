import React from 'react';

const UserComponent = ({user:{id, name, email}, chooseUser}) => {
  return (
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <button onClick={()=>chooseUser(id)}>detail</button>
      </div>
  );
};

export default UserComponent;