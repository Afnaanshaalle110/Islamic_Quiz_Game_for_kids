import React from "react";
import "../index.css";
import { useContext } from "react";
import { GameContext } from "../Pages/Contexts"
import { QuestionH } from "../Pages/QuestionH"

const EndQuiz = () => {
  const { score, setScore, setGame, userName } = useContext(GameContext);

  const restartQuiz = () => {
    setScore(0);
    setGame("menu");
  };
  return (
    <div className="EndQuiz">
      <h1>Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {QuestionH.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndQuiz;
