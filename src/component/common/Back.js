import React from "react";

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <h1 style={{ color: 'black' }}>{name}</h1>
          <h2 style={{ color: 'black' }}>{title}</h2>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  );
};

export default Back;
