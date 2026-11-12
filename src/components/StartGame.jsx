
import { useState } from "react"
import GameHeader from "./GameHeader"
import GameCanvas from "./GameCanvas"

function StartGame({ challengeObj, onBack, score, setScore }) {
  const [lives, setLives] = useState(4)

  return (
    <div className="start_game">

 
      <GameHeader
        challenge={challengeObj}
        lives={lives}
        score={score}
      />

      <GameCanvas
        challenge={challengeObj}
        lives={lives}
        setLives={setLives}
        score={score}
        setScore={setScore}
        onBack={onBack}
      />

    </div>
  )
}

export default StartGame
