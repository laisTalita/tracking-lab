import { useState } from "react"
import { Target, Workflow, Zap } from "lucide-react"
import StartGame from "./StartGame"
import MiniArchitecture from "./MiniArchitecture"

function GameScreen({ challenge, onBack,score, setScore}) {
  const [slide, setSlide] = useState(0)
  const [start, setStart] = useState(false)

  const slides = [
    {
      title: "Seu objetivo",
      description: challenge.objective,
      icon: Target
    },
    {
      title: "Como jogar",
      description:
        "Arraste os elementos pelo espaço de montagem e conecte os componentes para construir a arquitetura de rastreamento.",
      icon: Workflow
    },
    {
      title: "Regras do desafio",
      description:
        "Você terá 4 vidas e um tempo ilimitado. Conecte os elementos corretamente e valide sua arquitetura para concluir o desafio, se perder, sua vida diminui assim como seus pontos.",
      icon: Zap
    }
  ]

  const currentSlide = slides[slide]

  function nextSlide() {
    if (slide < slides.length - 1) {
      setSlide(slide + 1)
    } else {
      setStart(true)
    }
  }

  function previousSlide() {
    if (slide > 0) {
      setSlide(slide - 1)
    }
  }

  if (start) {
    return (
      <div className="main_start">
        <StartGame
          challengeObj={challenge}
          onBack={onBack}
          score={score}
          setScore={setScore}
        />
      </div>
    )
  }
  return (
    <div className="div_gamescreen  tela-jogo">
      <div className="div_main challenge-card">
        <button onClick={onBack} className="bot_back">Voltar</button>
        <p>{challenge.difficulty}</p>
        <h1>{challenge.title}</h1>


        <div className="objetivo">
          <div className="slide-icon">
            <currentSlide.icon size={38} strokeWidth={1.7} />
          </div>
          <h2>{currentSlide.title}</h2>
       <MiniArchitecture challenge={challenge} />
          

          <p>{currentSlide.description}</p>
        </div>
        <div className="container_buts">
          <div className="div_slides">
            {slides.map((item, index) => (
              <button
                key={index}
                onClick={() => setSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
                className={slide === index ? "slide_dot active" : "slide_dot"}
              />
            ))}
          </div>
          <div className="div_botoes">
            <button
              onClick={previousSlide}
              disabled={slide === 0}
            >
              Anterior
            </button>
            <button onClick={nextSlide}>
              {slide === slides.length - 1
                ? "Começar desafio"
                : "Próximo"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameScreen
