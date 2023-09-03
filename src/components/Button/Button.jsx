import React from 'react';
import './Button-module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button className="load-more-button" onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default Button;
