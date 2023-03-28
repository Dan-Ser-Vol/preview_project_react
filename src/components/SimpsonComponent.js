import React from 'react';

const SimpsonComponent = ({name, image}) => {
  return (
      <div>
        <h2>{name}</h2>
        <img src={image} alt=""/>
      </div>
  );
};

export default SimpsonComponent;