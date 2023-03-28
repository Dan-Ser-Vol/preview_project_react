import React from 'react';

const UserComponent = ({name, email}) => {
  return (
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
  );
};

export default UserComponent;