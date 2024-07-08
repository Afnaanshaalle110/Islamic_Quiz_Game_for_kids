import React, {useContext} from 'react'
import { QuizContext } from '../Pages/Contexts'
import '../index.css'
import { Questions } from '../Pages/QuestionH'


const MainMenue = () => {
    const {game, setgame} = useContext(QuizContext);
    return (
        <div className='menue'>
            <button onClick={() =>{setgame("quiz"); 
            }}> Start Quiz </button>
        </div>  
    );
}

export default MainMenue
