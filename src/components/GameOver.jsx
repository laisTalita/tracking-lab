function GameOver({ onBack }) {
  return (
    <div className="gameover_overlay">
      <div className="gameover_card">
        <span className="gameover_icon">💔</span>

        <span className="gameover_label">FIM DE JOGO</span>

        <h1>Game Over!</h1>

        <p>
          Suas vidas acabaram.
          <br />
          Não desista! Vamos tentar novamente?
        </p>

        <button onClick={onBack}>
          Voltar ao início
        </button>
      </div>
    </div>
  )
}

export default GameOver