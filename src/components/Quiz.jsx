import React, {useState, useContext} from 'react'
import { QuizContext } from '../Pages/Contexts'
import { Questions } from '../Pages/QuestionH'

const Quiz = () => {
    //   function update
    const [score, setscore] = useContext(QuizContext);
    const [CurrQuestion, setCurrQuestion] = useState(0);
    const [optionchosen, setoptionchosen] = useState("")
          // #netQuestion function
    const next = () => {
        if (Questions[CurrQuestion].Answer == optionchosen){
            setscore(score + 1);
        }
        alert(score);
        setCurrQuestion(CurrQuestion + 1);
    }
    return (
        <div className='Quiz'>
            <h1>{Questions[CurrQuestion] .prompt}</h1>
            <div className='opitions'>
                <button onClick={() => setoptionchosen("A")} > 
                    {Questions[CurrQuestion].opA}{""}</button>
                <button onClick={() => setoptionchosen("B")} > 
                    {Questions[CurrQuestion].opB}{""}</button>
                <button onClick={() => setoptionchosen("C")} >
                     {Questions[CurrQuestion].opC}{""}</button>
                <button onClick={() => setoptionchosen("D")} > 
                    {Questions[CurrQuestion].opD}{""}</button>
            </div>
            <button onClick={next}>Next</button>
        </div>
    );
}
export default Quiz