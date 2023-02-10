import React from 'react';
import { Link } from 'react-router-dom';

import './main-button.css';

type ButtonType = {
  text: string;
  path: string;
  onClick?: () => void;
};

export const MainButton: React.FC<ButtonType> = ({ text, path, onClick }) => (
  <Link to={path}>
    <button type="button" className="main-btn" onClick={onClick}>
      {text}
    </button>
  </Link>
);
