import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AnswerButton } from '../components/AnswerButton/AnswerButton';
import { Sidebar } from '../components/Sidebar/SidebarMain';
import { BurgerBtn } from '../components/BurgerBtn';
import { CloseBtn } from '../components/CloseBtn';
import { randomIntFromInterval } from '../helpers/helpers';
import gamesJSON from '../helpers/questions.json';
import optionsJSON from '../helpers/options.json';
import loseSound from '../assets/sounds/Lose.mp3';
import winSound from '../assets/sounds/Win.mp3';

const DELAY = 500;
const rndInt = randomIntFromInterval(0, 45);
const questionsArr = gamesJSON.games[rndInt];

export const Game: React.FC = () => {
  const navigate = useNavigate();
  const loseAudio = new Audio(loseSound);
  const winAudio = new Audio(winSound);

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentQuestionItem = questionsArr.questions[currentQuestionIdx];

  useEffect(() => {
    window.onresize = () => setIsOpen(false);
  }, []);

  const handleCurrentAnswer = (event: React.MouseEvent, answerIdx: number) => {
    if (
      answerIdx === currentQuestionItem.answer
      && currentQuestionIdx <= questionsArr.questions.length // amount of questions in the arr
    ) {
      event.currentTarget.classList.add('correct');
      winAudio.play();
      setTimeout(() => {
        setCurrentQuestionIdx(currentQuestionIdx + 1);
      }, DELAY);
    } else {
      event.currentTarget.classList.add('wrong');
      loseAudio.play();
      setTimeout(() => {
        navigate('/over', {
          replace: true,
          state: { winningIdx: currentQuestionIdx },
        });
      }, DELAY);
    }
  };

  const answers = gamesJSON.games[rndInt].questions[
    currentQuestionIdx
  ].content.map((content, index) => (
    <AnswerButton
      key={content}
      index={index}
      onClick={handleCurrentAnswer}
      text={content}
      spanContent={optionsJSON.answerOptions[index]}
    />
  ));

  const handleMenuBurger = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = isOpen ? <CloseBtn /> : <BurgerBtn />;

  return (
    <div className="game-container">
      <div className="question-container">
        <div className="question-container-headline">
          {currentQuestionItem.question}
        </div>
        <div className="answers-container">{answers}</div>
      </div>
      <button type="button" className="menu-burger" onClick={handleMenuBurger}>
        {menuItem}
      </button>
      <Sidebar currentIndex={currentQuestionIdx} isMenuBurgerOpen={isOpen} />
    </div>
  );
};
