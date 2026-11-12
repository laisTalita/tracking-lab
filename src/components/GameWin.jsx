
import { Trophy, Star, ArrowRight } from "lucide-react"

function GameWin({ onBack, score }) {
  return (
    <div className="gamewin_overlay">
      <div className="gamewin_card">

        <div className="gamewin_icon">
          <Trophy size={40} />
        </div>
        <span className="gamewin_label">
          ARQUITETURA VALIDADA
        </span>
        <h1>Muito bem !</h1>

        <div className="gamewin_score">
          <Star size={24} />
          <strong>+100 pontos</strong>
          <span>Pontuação atual: {score}</span>
        </div>

        <button onClick={onBack}>
          Continuar <ArrowRight size={19} />
        </button>

      </div>
    </div>
  )
}

export default GameWin
