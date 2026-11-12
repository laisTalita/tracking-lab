import { useState } from 'react'
import './App.css'
import { challenges } from './data/challenges'
import ChallengeCard from './components/ChallengeCard'
import SelectNivel from './components/SelectNivel'
import GameScreen from './components/GameScreen'
import logo from './assets/logo.png'
import CursorTrail from './components/CursorTrail'

function App() {
  const [selectedChallenge,setSelectedChallenge] = useState(null)
  const [selectedLevel, setSelectedLevel] = useState('')
  const filterChallenge = challenges.filter((challenge =>  challenge.difficulty === selectedLevel))
  const [score, setScore] = useState(0)

  function handleSelectChallenge(challenge) {
    setSelectedChallenge(challenge)
}
  return (
    <>
    <main className="app">
     <CursorTrail />

      <div className="decoracao quadrado-1"></div>
      <div className="decoracao quadrado-2"></div>
      <div className="decoracao quadrado-3"></div>
      <div className="decoracao quadrado-4"></div>
      {selectedChallenge ? 
         <GameScreen 
         challenge={selectedChallenge} 
         onBack={() => setSelectedChallenge(null)}
         score={score}
         setScore={setScore}/>
         :
  
        <div className='main'>
          <header>
          <nav>
              <img
            src={logo}
            alt="Tracking Lab"
            style={{ height: "100px" }}/>
            
            <p>score: {score}</p>
          </nav>

          </header>
          <section>
             <div className='divOne'>
              <h1>Escolha seu nível ou selecione a fase</h1>
                <SelectNivel value={selectedLevel} setSelection={setSelectedLevel}></SelectNivel>
             </div>
                
                <div className='divTwo'>
                  {
                    selectedLevel ?
          
                    filterChallenge.map((challenge)=>(
                    <ChallengeCard
                      key={challenge.id}
                      challenge={challenge}
                      onSelect={handleSelectChallenge}
                    />
                  )):
                  
                  challenges.map((challenge) => (
                    <ChallengeCard
                      key={challenge.id}
                      challenge={challenge}
                      onSelect={handleSelectChallenge}
                    />
                  ))
                }

                </div>

          </section>
        </div>
      }
    </main>
    <p className='criado'>
      criado por : Laís Talita
    </p>
    </>
  )
}

export default App
