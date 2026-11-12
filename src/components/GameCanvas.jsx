
import {
  useNodesState,
  useEdgesState,
  ReactFlow,
  Background,
  Controls,
  addEdge,
  ConnectionMode,
  MarkerType
} from "@xyflow/react"

import { useState, useEffect } from "react"
import "@xyflow/react/dist/style.css"
import ErroConexao from "./ErroConexao"
import CustomNode from "./CustomNode"
import GameWin from "./GameWin"
import GameOver from "./GameOver"
import { validateConnections } from "../game/gameLogic"

function GameCanvas({ challenge, lives, setLives,score, setScore, onBack }) {
  const [gameOver, setGameOver] = useState(false)
  const [erroConexao, setErroConexao] = useState(false)
  const [scoreAnterior, setScoreAnterior] = useState(score)
  const [gameWin, setGameWin] = useState(false)


  const [nodes, setNodes, onNodesChange] = useNodesState(
    challenge.nodes.map((node) => ({
      ...node,
      type: "custom",
      data: {
        label: node.label,
        type: node.type
      },
      position: {
        x: Math.floor(Math.random() * 500),
        y: Math.floor(Math.random() * 300)
      }
    }))
  )

  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const nodeTypes = {
    custom: CustomNode
  }

  function onConnect(params) {
    setEdges((currentEdges) =>
      addEdge(
        {
          ...params,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: "#BDA4FF"
          }
        },
        currentEdges
      )
    )
  }


  function handleValidate() {
    if (gameOver) return

    const result = validateConnections(
      challenge.correctConnections,
      edges
    )

    if (result) {
      setScore((currentScore) => currentScore + 100)
      setGameWin(true)
    } else {
      const remainingLives = lives - 1

      setLives(remainingLives)
      setScoreAnterior(score)

      if (score >= 50) {
        setScore((currentScore) => Math.max(0, currentScore - 50))
      }

        if (remainingLives === 0) {
        setGameOver(true)
        } else {
            setErroConexao(true)
        }
    }
  }
    useEffect(() => {
  if (!erroConexao) return

  const timer = setTimeout(() => {
    setErroConexao(false)
  }, 4000)

  return () => clearTimeout(timer)
}, [erroConexao])


  if (gameOver) {
    return <GameOver onBack={onBack} />
  }

  if (gameWin) {
  return (
    <GameWin
      onBack={onBack}
      score={score}
    />
  )
}

  return (
    <div className="game_canvas">

      <button
        className="validate_button"
        onClick={handleValidate}
      >
        <span>✓</span> Validar arquitetura
      </button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        connectionRadius={100}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        minZoom={0.3}
        maxZoom={1.5}
        deleteKeyCode={["Backspace", "Delete"]}
      >
        <Background />
        <Controls />
      </ReactFlow>
        {erroConexao && (
            <ErroConexao
                lives={lives}
                score={score}
            />
        )}

    </div>
  )
}

export default GameCanvas
