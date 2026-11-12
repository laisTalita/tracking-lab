
export function validateConnections(correctConnections, edges) {
  const expected = correctConnections.map(
    ([source, target]) => `${source}->${target}`
  )

  const playerConnections = edges.map(
    (edge) => `${edge.source}->${edge.target}`
  )

  const allCorrect = expected.every(
    (connection) => playerConnections.includes(connection)
  )

  const noExtraConnections =
    playerConnections.every(
      (connection) => expected.includes(connection)
    )

  return (
    allCorrect &&
    noExtraConnections &&
    expected.length === playerConnections.length
  )
}
