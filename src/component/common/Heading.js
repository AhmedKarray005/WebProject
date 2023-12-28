import React from "react";

const Heading = ({ title, subtitle, titleStyles, subtitleStyles }) => {
  return (
    <div className='heading'>
      <h1 style={titleStyles}>{title}</h1>
      <p style={subtitleStyles}>{subtitle}</p>
    </div>
  );
};

export default Heading;
