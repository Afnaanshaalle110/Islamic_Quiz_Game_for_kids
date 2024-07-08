import "./index.css";
import Menue from './components/Menue'
import Quiz from "./components/EndQuiz"
import { useState } from "react"
import { GameContext } from "./Pages/Contexts"
import EndQuiz from "./components/EndQuiz";
// ['menu', 'playing', 'finished']
const App = () => {
  const [Game, setGame] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="game">
      <h1>Islamic Quiz Game</h1>
      <GameContext.Provider
        value={{
          Game,
          setGame,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {Game === "menu" && <Menue />}
        {Game === "playing" && <Quiz />}
        {Game === "finished" && <EndQuiz/>}
      </GameContext.Provider>
    </div>
  );
}

export default App;
