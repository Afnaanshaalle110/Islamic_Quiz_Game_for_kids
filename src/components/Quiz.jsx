import React, {useState} from 'react'
import { Questions } from '../Pages/QuestionH';

const Quiz = () =>{
    const [CurrQuestion, setCurrQuestion] = useState(0); 
    const [optionchosen, setoptionchosen] = useState("");
    return (
        <div className='Quiz'>
            <h1>{Questions[CurrQuestion] .prompt}</h1>

            <div className='opitions'>
                <button onClick={() => setoptionchosen("A")}> {Questions[CurrQuestion] .opA}</button>
                <button onClick={() => setoptionchosen("B")}> {Questions[CurrQuestion] .opB}</button>
                <button onClick={() => setoptionchosen("C")}> {Questions[CurrQuestion] .opC}</button>
                <button onClick={() => setoptionchosen("D")}> {Questions[CurrQuestion] .opD}</button>
            
            </div>
            <button>Next</button>
        </div>
        
    )
}

export default Quiz
