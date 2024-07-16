import React, { useContext } from 'react';
import { quizcontext } from '../Pages/Contexts';
import '../index.css';
import { Questions } from '../Pages/Questions';

const EndQuiz = () => {
  // Access the context
  const { Score, setScore, setgameState } = useContext(quizcontext);

  // Handle the restart quiz button click
  const restartquiz = () => {
    setScore(0);
    setgameState("menue");
  };

  return (
    <div className='EndQuiz'>
      <h1>Finished Quiz</h1>
      {Score}/{Questions.length}
      <button onClick={restartquiz}>Restart Quiz</button>
    </div>
  );
};

export default EndQuiz;
