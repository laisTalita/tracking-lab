import { useEffect, useState } from "react"

function CursorTrail() {
    const [particles, setParticles] = useState([])

    useEffect(() => {
        function handleMouseMove(e) {
            const particle = {
                id: Math.random(),
                x: e.clientX,
                y: e.clientY
            }

            setParticles(current => [...current.slice(-15), particle])

            setTimeout(() => {
                setParticles(current =>
                    current.filter(p => p.id !== particle.id)
                )
            }, 600)
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div className="cursor-trail">
            {particles.map(particle => (
                <span
                    key={particle.id}
                    className="particle"
                    style={{
                        left: particle.x,
                        top: particle.y
                    }}
                />
            ))}
        </div>
    )
}

export default CursorTrail