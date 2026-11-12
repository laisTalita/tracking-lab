
import { useState, useEffect } from "react"

import {
  Search,
  Share2,
  Monitor,
  Tags,
  Server,
  Fingerprint,
  MessageCircle,
  Workflow,
  Code,
  Database,
  Users,
  ShoppingCart,
  Receipt,
  ChartNoAxesCombined
} from "lucide-react"

function MiniArchitecture({ challenge }) {
  const [etapaAtiva, setEtapaAtiva] = useState(0)
  const [etapaSelecionada, setEtapaSelecionada] = useState(null)

  const todasEtapas = [
    { id: "google", nome: "Google Ads", icon: Search },
    { id: "meta", nome: "Meta Ads", icon: Share2 },
    { id: "site", nome: "Site", icon: Monitor },
    { id: "gtm", nome: "GTM", icon: Tags },
    { id: "sgtm", nome: "sGTM", icon: Server },
    { id: "ga4", nome: "GA4", icon: ChartNoAxesCombined },
    { id: "identifiers", nome: "Identificadores", icon: Fingerprint },
    { id: "whatsapp", nome: "WhatsApp", icon: MessageCircle },
    { id: "api", nome: "API", icon: Workflow },
    { id: "backend", nome: "Backend", icon: Code },
    { id: "database", nome: "Database", icon: Database },
    { id: "crm", nome: "CRM", icon: Users },
    { id: "sale", nome: "Venda", icon: ShoppingCart },
    { id: "purchase", nome: "Purchase", icon: Receipt }
  ]

  const etapas = todasEtapas
  .filter(etapa =>
    challenge.nodes.some(node => node.id === etapa.id)
  )
  .sort(() => Math.random() - 0.5)

  useEffect(() => {
    let atual = 0
    let timeout

    setEtapaAtiva(0)

    function animar() {
      atual++

      if (atual < etapas.length) {
        setEtapaAtiva(atual)
        timeout = setTimeout(animar, 700)
      } else {
        timeout = setTimeout(() => setEtapaAtiva(-1), 700)
      }
    }

    timeout = setTimeout(animar, 700)

    return () => clearTimeout(timeout)
  }, [challenge.id, etapas.length])

  return (
    <div className="mini-architecture">
      {etapas.map((etapa, index) => {
        const Icon = etapa.icon

        return (
          <div
            className={`mini-etapa
              ${etapaAtiva === index ? "ativa" : ""}
              ${etapaSelecionada === etapa.id ? "selecionada" : ""}
            `}
            key={etapa.id}
            onClick={() => setEtapaSelecionada(etapa.id)}
          >
            <div className="mini-icon">
              <Icon size={23} />
            </div>

            <span>{etapa.nome}</span>
          </div>
        )
      })}
    </div>
  )
}

export default MiniArchitecture
