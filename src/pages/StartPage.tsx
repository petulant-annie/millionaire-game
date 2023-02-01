import React from 'react';
import { MainButton } from '../components/MainButton/MainButton';
import { Hand } from '../components/HandImage';

export const StartPage: React.FC = () => {
  return (
    <div className="start-page-wrapper">
      <div className="main-block">
        <div className="main-image-container">
          <Hand />
        </div>
        <div className="main-headline-content">
          <div className="start-title">Who wants to be a millionaire?</div>
          <MainButton text="Start" path="game" />
        </div>
      </div>
    </div>
  );
};
