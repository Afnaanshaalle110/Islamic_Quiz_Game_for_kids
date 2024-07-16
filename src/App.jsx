import React, { useContext } from 'react';
import "./index.css";
import MainMenue from "./components/MainMenue";
import Quiz from "./components/Quiz";
import EndQuiz from "./components/EndQuiz";
import { quizcontext, QuizProvider } from "./Pages/Contexts";

const App = () => {
  return (
    <div className='game'>
      <h1>Islamic Quiz Game</h1>
      {/* Provide the quiz context to the rest of the app */}
      <QuizProvider>
        <QuizContextConsumer />
      </QuizProvider>
    </div>
  );
};

// Component to consume the context and conditionally render components based on game state
const QuizContextConsumer = () => {
  const { gameState } = useContext(quizcontext);

  return (
    <>
      {gameState === "menue" && <MainMenue />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endquiz" && <EndQuiz />}
    </>
  );
};

export default App;
