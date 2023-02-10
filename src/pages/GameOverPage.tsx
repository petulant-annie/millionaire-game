import React from 'react';
import { useLocation } from 'react-router-dom';

import { MainButton } from '../components/MainButton/MainButton';
import { Hand } from '../components/HandImage';
import winningAmount from '../helpers/winningAmount.json';

export const GameOverPage: React.FC = () => {
  const location = useLocation();
  const winning = winningAmount.winning[location.state.winningIdx - 1];
  const finalAmount = location.state.winningIdx === 0 ? 0 : winning;

  return (
    <div className="main-block">
      <div className="main-image-container">
        <Hand />
      </div>
      <div className="main-headline-content">
        <div className="score-heading">Total score:</div>
        <div className="start-title">
          $
          {finalAmount}
          {' '}
          earned
        </div>
        <MainButton text="Try again" path="/" />
      </div>
    </div>
  );
};
