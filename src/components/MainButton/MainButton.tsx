import React from 'react';
import { Link } from 'react-router-dom';

import './main-button.css';

type ButtonType = {
  text: string;
  path: string;
};

export const MainButton: React.FC<ButtonType> = ({ text, path }) => {
  return (
    <Link to={path}>
      <button className="main-btn">{text}</button>
    </Link>
  );
};
