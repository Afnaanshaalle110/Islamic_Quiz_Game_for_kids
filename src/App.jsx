import React, { useState, useContext } from 'react'
import './index.css'
import MainMenue from './components/MainMenue';
import Quiz from './components/Quiz';
import EndQuiz from './components/EndQuiz';
import { quizcontext } from './Pages/Contexts';
const App = () => {
    // function update
  const [gameState, setgameState] = useState("menue");

  return (
    <div className='game'>
        <h1>Islamic Quiz Game</h1>
        {/* conditional rendering */}
        <quizcontext.Provider value={{gameState, setgameState}}>
        {gameState == "menue" && <MainMenue/>}
        {gameState == "quiz" && <Quiz/>}
        {gameState == "endquiz" && <EndQuiz/>}
        </quizcontext.Provider>
    </div>
  );
}

export default App