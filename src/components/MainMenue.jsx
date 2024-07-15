import React, { useContext, useState } from 'react'
import { quizcontext } from '../Pages/Contexts'
import '../index.css'
import Quiz from './Quiz';

function MainMenue() {
    const {gameState, setgameState} = useContext(quizcontext); 
    // const [userName, setUserNamer] = useState("");
    
    
//    const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

    return (
        <div className='Menue'>
              {/* {Submitted ? (
            <h1>Welcome, {userName}!</h1>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <br />
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserNamer(e.target.value)}
                  required
                />
              </label>
              <button type="submit" >Submit</button>
            </form>
          )}
                */}
         <button onClick={() => {setgameState("quiz");

            }}> Start Quiz</button> 
           
        </div>
    )
}
    
export default MainMenue
