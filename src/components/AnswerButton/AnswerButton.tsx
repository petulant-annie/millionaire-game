import React from 'react';

import './answer-button.css';

export const AnswerButton: React.FC<{
  index: number;
  text: string;
  spanContent: string;
  onClick: (event: React.MouseEvent, index: number) => void;
}> = ({
  index, text, spanContent, onClick,
}) => (
  <button
    type="button"
    className="answer-button"
    onClick={(event) => onClick(event, index)}
  >
    <div className="btn-line-left" />

    <div className="btn-wrapper">
      <div className="triangle-left" />
      <div className="answer-text">
        <span>{spanContent}</span>
        {' '}
        {text}
      </div>
      <div className="arrow-wrapper">
        <div className="triangle-right" />
      </div>
    </div>

    <div className="btn-line-right" />
  </button>
);
