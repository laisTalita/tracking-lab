
import {
  AlertTriangle,
  HeartCrack,
  TrendingDown,
  RotateCcw,
  ArrowLeft
} from "lucide-react"

function ErrorConexao({lives, score }) {
  const pontosPerdidos = score >= 50 ? 50 : 0

  return (
    <div className="error-conexao">

      <div className="error-card">

        <div className="error-icon">
          <AlertTriangle size={48} />
        </div>

        <span className="error-label">
          FALHA DE ARQUITETURA
        </span>

        <h1>OPPPPAAA! Conexão incorreta! ahaha</h1>

        <div className="error-stats">

          <div className="error-stat">
            <HeartCrack size={25} />
            <strong>-1</strong>
            <span>Vida perdida</span>
          </div>

          <div className="error-stat">
            <TrendingDown size={25} />
            <strong>{pontosPerdidos > 0 ? `-${pontosPerdidos}` : "0"}</strong>
            <span>
              {pontosPerdidos > 0
                ? "Pontos perdidos"
                : "Sem pontos para perder"}
            </span>
          </div>

        </div>

        <div className="error-lives">
          Vidas restantes: <strong>{lives}</strong>
        </div>

      </div>

    </div>
  )
}

export default ErrorConexao
