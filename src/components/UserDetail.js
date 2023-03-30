import React from 'react';

const UserDetail = ({user:{ name, email}}) => {
  return (
      <div>
        <h2 style={{color: 'red'}}>{name}</h2>
        <p>{email}</p>
      </div>
  );
};

export default UserDetail;