import React, { useState, useContext } from "react";
import { quizcontext } from "../Pages/Contexts";
import { Questions } from "../Pages/Questions";

function Quiz() {
  // Access the context
  const { Score, setScore, setgameState, username } = useContext(quizcontext); 
  // State to manage the current question and selected option
  const [currentquestion, setcurrentquestion] = useState(0);
  const [optionchose, setoptionchose] = useState("");

  // Handle the next question button click
  const handleNextQ = () => {
    if (Questions[currentquestion].Answer === optionchose) {
      setScore(Score + 1);
    }
    setcurrentquestion(currentquestion + 1);  // Move to the next question
    setoptionchose("");  // Reset selected option
  };

  // Handle the finish quiz button click
  const Finishquiz = () => {
    if (Questions[currentquestion].Answer === optionchose) {
      setScore(Score + 1);
    }
    setgameState('endquiz');
  };

  // Function to determine if an option is selected
  const isSelected = (option) => optionchose === option ? 'selected' : '';

  return (
    <div className='quiz'>
      <h2>Username: {username}</h2>
      <h2>Score: {Score}</h2>
      <h1>{Questions[currentquestion].prompt}</h1>
      <div className='options'>
        <button className={isSelected("A")} onClick={() => setoptionchose("A")}>{Questions[currentquestion].opA}</button>
        <button className={isSelected("B")} onClick={() => setoptionchose("B")}>{Questions[currentquestion].opB}</button>
        <button className={isSelected("C")} onClick={() => setoptionchose("C")}>{Questions[currentquestion].opC}</button>
        <button className={isSelected("D")} onClick={() => setoptionchose("D")}>{Questions[currentquestion].opD}</button>
      </div>
      {currentquestion === Questions.length - 1 ? (
        <button onClick={Finishquiz}>Finish</button>
      ) : (
        <button onClick={handleNextQ}>Next</button>
      )}
    </div>
  );
}

export default Quiz;
