import { Heart } from "lucide-react"
function GameHeader({ challenge, lives, score }) {
  return (
    <header className="game_header">

      <div className="game_header_title">
        <span>DESAFIO ATUAL</span>
        <h1>{challenge.title}</h1>
      </div>

      <div className="game_header_info">

        <div className="game_lives">
          <span className="header_label">VIDAS</span>
          <div className="lives_icons">
            {Array.from({ length: 4 }, (_, index) => (
                  <Heart
                  key={index}
                  size={25}
                  strokeWidth={2.5}
                  className={index < lives ? "life active" : "life lost"}
                  fill={index < lives ? "currentColor" : "none"}
                />
            ))}
          </div>
        </div>

        <div className="game_score">
          <span className="header_label">PONTUAÇÃO</span>
          <strong>{score}</strong>
        </div>

      </div>
    </header>
  )
}

export default GameHeader