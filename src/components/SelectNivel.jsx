import { useState, useEffect, useRef } from "react"
import { ChevronDown, Check } from "lucide-react"

function SelectNivel({ value, setSelection }) {
    const [aberto, setAberto] = useState(false)
    const dropdownRef = useRef(null)

    const niveis = [
        "Todos os Níveis",
        "Iniciante",
        "Intermediário",
        "Avançado"
    ]

    const nivelAtual = value || "Todos os Níveis"

    function selecionarNivel(nivel) {
        setSelection(nivel === "Todos os Níveis" ? "" : nivel)
        setAberto(false)
    }

    useEffect(() => {
        function fecharDropdown(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setAberto(false)
            }
        }

        document.addEventListener("mousedown", fecharDropdown)

        return () => {
            document.removeEventListener("mousedown", fecharDropdown)
        }
    }, [])

    return (
        <div className="dropdown-nivel" ref={dropdownRef}>

            <button
                type="button"
                className={`nivel-btn ${aberto ? "aberto" : ""}`}
                onClick={() => setAberto(!aberto)}
                aria-expanded={aberto}
            >
                <span>{nivelAtual}</span>

                <ChevronDown
                    size={20}
                    className={aberto ? "seta aberta" : "seta"}
                />
            </button>

            {aberto && (
                <div className="nivel-options">
                    {niveis.map((nivel) => {
                        const selecionado = nivel === nivelAtual

                        return (
                            <button
                                type="button"
                                key={nivel}
                                className={`nivel-option ${selecionado ? "selecionado" : ""}`}
                                onClick={() => selecionarNivel(nivel)}
                            >
                                <span>{nivel}</span>

                                {selecionado && <Check size={17} />}
                            </button>
                        )
                    })}
                </div>
            )}

        </div>
    )
}

export default SelectNivel