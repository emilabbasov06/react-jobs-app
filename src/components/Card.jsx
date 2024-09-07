import React from 'react';

function Card(props) {
  const { children, bg = 'bg-gray-100' } = props;

  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
}

export default Card;
