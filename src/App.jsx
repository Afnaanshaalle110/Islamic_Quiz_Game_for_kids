import React, { useState , useContext} from 'react'
import './index.css';
import MainMenue from './components/MainMenue'
import Quiz from './components/Quiz'
import EndQuiz from './components/EndQuiz'
import {QuizContext} from './Pages/Contexts'




const App = () => {
    const [game, setgame] = useState("menue");
    const [score, setscore] = useState(0);

    return (
      <div className='game' >
          <h1>Islamic Quiz Game</h1>
           {/* conditional rendering  */}
          <QuizContext.Provider value={{game, setgame, score, setscore}}>
          {game == "menue" && <MainMenue/>}
          {game == "quiz" && <Quiz/>}
          {game == "endquiz" && <EndQuiz/>}
          </QuizContext.Provider>
      </div>
    )
  }
  
  export default App
