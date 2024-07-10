import React, { useContext } from 'react'
import { quizcontext } from '../Pages/Contexts'
import '../index.css'

function MainMenue() {
    const {gameState, setgameState} = useContext(quizcontext);
    return (
        <div className='Menue'>
            <button onClick={() => {setgameState("quiz");

            }}> Start Quiz</button>
        </div>
    )
}
export default MainMenue
