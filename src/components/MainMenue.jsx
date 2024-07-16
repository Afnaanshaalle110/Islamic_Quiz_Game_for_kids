import React, { useContext, useState } from 'react';
import { quizcontext } from '../Pages/Contexts';
import '../index.css';

function MainMenue() {
  // Access the context
  const { setgameState, setUsername } = useContext(quizcontext); 
  // State to manage the input username
  const [inputUsername, setInputUsername] = useState("");

  // Handle the start quiz button click
  const handleStartQuiz = () => {
    if (inputUsername.trim() !== "") {
      // Set the username in the context and start the quiz
      setUsername(inputUsername);
      setgameState("quiz");
    } else {
      alert("Please enter a username");
    }
  };

  return (
    <div className='Menue'>
      <label>Username:</label>
      <input type="text" value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} />
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default MainMenue;
