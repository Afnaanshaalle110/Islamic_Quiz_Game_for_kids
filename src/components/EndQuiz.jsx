import React, { useContext } from 'react'
import { quizcontext } from '../Pages/Contexts'
import '../index.css'
import { Questions } from '../Pages/Questions'
import { renderToStaticMarkup } from 'react-dom/server'

const EndQuiz = () => {
    const {Score, setScore,setgameState ,userName } = useContext(quizcontext);
    const restartquiz = () =>{
        setScore(0);
        setgameState("menue");
    }
    return (
       <div className='EndQuiz'>
        <h1>Finished Quiz</h1>
        {/* <h3>{userName} </h3> */}
        {Score}/{Questions.length}
        <button onClick={restartquiz}>Restart Quiz</button>
        </div> 
    )
}

export default EndQuiz
