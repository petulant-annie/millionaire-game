import React from 'react';

import './answer-button.css';

export const AnswerButton: React.FC<{
  index: number;
  text: string;
  spanContent: string;
  onClick: (event: React.MouseEvent, index: number) => void;
}> = ({ index, text, spanContent, onClick }) => {
  return (
    <button
      className={`answer-button`}
      onClick={(event) => onClick(event, index)}
    >
      <div className="btn-line-left"></div>

      <div className="btn-wrapper">
        <div className="triangle-left"></div>
        <div className="answer-text">
          <span>{spanContent}</span> {text}
        </div>
        <div className="arrow-wrapper">
          <div className="triangle-right"></div>
        </div>
      </div>

      <div className="btn-line-right"></div>
    </button>
  );
};
