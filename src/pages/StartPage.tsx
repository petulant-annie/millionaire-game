import React from 'react';
import { MainButton } from '../components/MainButton/MainButton';
import { Hand } from '../components/HandImage';
import sound from '../assets/sounds/StartGame.mp3';

export const StartPage: React.FC = () => {
  const audio = new Audio(sound);
  const handlePlaySound = () => {
    audio.play();
  };

  return (
    <div className="start-page-wrapper">
      <div className="main-block">
        <div className="main-image-container">
          <Hand />
        </div>
        <div className="main-headline-content">
          <div className="start-title">Who wants to be a millionaire?</div>
          <MainButton text="Start" path="game" onClick={handlePlaySound} />
        </div>
      </div>
    </div>
  );
};
