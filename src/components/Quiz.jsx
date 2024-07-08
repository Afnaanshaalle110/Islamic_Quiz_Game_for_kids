import { useState } from "react";
import { useContext } from "react";
import { GameContext } from "../Pages/Contexts";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, Game, setGame } = useContext(GameContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const NextQuestion = () => {
    if (QuestionH[currentQuestion].Answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finish = () => {
    if (QuestionH[currentQuestion].Answer == optionChosen) {
      setScore(score + 1);
    }
    setGame("finished");
  };

  return (
    <div className="Quiz">
      <h1>{QuestionH[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {QuestionH[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {QuestionH[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {QuestionH[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {QuestionH[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == QuestionH.length - 1 ? (
        <button onClick={finish} id="Next">
          Finish Quiz
        </button>
      ) : (
        <button onClick={NextQuestion} id="Next">
          Nex
        </button>
      )}
    </div>
  );
}

export default Quiz;
