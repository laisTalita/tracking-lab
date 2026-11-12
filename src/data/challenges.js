
export const challenges = [
  {
    id: 1,
    title: 'Landing Page',
    category: 'Captação de leads',
    difficulty: 'Iniciante',
    architecture: 'basic',

    description:
      'Uma empresa criou uma landing page e precisa medir quantas pessoas acessam o site e enviam um formulário.',

    objective:
      'Monte uma estrutura para registrar visitas e gerar eventos de lead no Analytics.',

    nodes: [
      { id: 'site', label: 'Landing Page', type: 'site' },
      { id: 'gtm', label: 'GTM Web', type: 'tag-manager' },
      { id: 'ga4', label: 'GA4', type: 'analytics' }
    ],

    correctConnections: [
      ['site', 'gtm'],
      ['gtm', 'ga4']
    ],

    explanation:
      'O GTM Web captura os eventos do site e os envia ao GA4. O envio do formulário deve gerar um evento de lead, sem confundir uma visita com uma conversão.'
  },

  {
    id: 4,
    title: 'Clínica',
    category: 'Geração de contatos',
    difficulty: 'Intermediário',
    architecture: 'intermediate',

    description:
      'Uma clínica anuncia no Google e no Meta. Os pacientes chegam ao site e entram em contato. A equipe precisa acompanhar os contatos até a venda.',

    objective:
      'Conecte os anúncios ao site, configure o rastreamento pelo servidor e encaminhe os leads ao CRM.',

    nodes: [
      { id: 'google', label: 'Google Ads', type: 'ads' },
      { id: 'meta', label: 'Meta Ads', type: 'ads' },
      { id: 'site', label: 'Site da clínica', type: 'site' },
      { id: 'gtm', label: 'GTM Web', type: 'tag-manager' },
      { id: 'sgtm', label: 'sGTM', type: 'server' },
      { id: 'ga4', label: 'GA4', type: 'analytics' },
      { id: 'api', label: 'API', type: 'api' },
      { id: 'crm', label: 'CRM', type: 'crm' },
      { id: 'sale', label: 'Venda', type: 'conversion' }
    ],

    correctConnections: [
      ['google', 'site'],
      ['meta', 'site'],
      ['site', 'gtm'],
      ['gtm', 'sgtm'],
      ['sgtm', 'ga4'],
      ['sgtm', 'google'],
      ['sgtm', 'meta'],
      ['sgtm', 'api'],
      ['api', 'crm'],
      ['crm', 'sale']
    ],

    explanation:
      'O GTM Web encaminha os dados ao sGTM, que distribui os eventos aos destinos de rastreamento. Uma API permite integrar os dados ao CRM, onde a equipe acompanha os leads até a venda.'
  },

  {
    id: 6,
    title: 'Operação completa',
    category: 'Rastreamento ponta a ponta',
    difficulty: 'Avançado',
    architecture: 'advanced',

    description:
      'Uma operação precisa conectar anúncios, site, identificadores, WhatsApp, integrações, CRM e banco de dados para devolver às plataformas os resultados reais das vendas.',

    objective:
      'Monte uma arquitetura completa, desde a origem do tráfego até o retorno da conversão confirmada às plataformas de anúncios.',

    nodes: [
      { id: 'google', label: 'Google Ads', type: 'ads' },
      { id: 'meta', label: 'Meta Ads', type: 'ads' },
      { id: 'site', label: 'Site', type: 'site' },
      { id: 'gtm', label: 'GTM Web', type: 'tag-manager' },
      { id: 'sgtm', label: 'sGTM', type: 'server' },
      { id: 'identifiers', label: 'Identificadores + eventos', type: 'data' },
      { id: 'whatsapp', label: 'WhatsApp', type: 'channel' },
      { id: 'api', label: 'API / Webhook', type: 'api' },
      { id: 'backend', label: 'Backend / Integração', type: 'backend' },
      { id: 'database', label: 'Banco de dados', type: 'database' },
      { id: 'crm', label: 'CRM', type: 'crm' },
      { id: 'sale', label: 'Venda confirmada', type: 'conversion' },
      { id: 'purchase', label: 'Purchase / Conversão offline', type: 'conversion' }
    ],

    correctConnections: [
      ['google', 'site'],
      ['meta', 'site'],
      ['site', 'gtm'],
      ['gtm', 'sgtm'],
      ['sgtm', 'identifiers'],
      ['site', 'whatsapp'],
      ['identifiers', 'api'],
      ['whatsapp', 'api'],
      ['api', 'backend'],
      ['backend', 'database'],
      ['backend', 'crm'],
      ['database', 'sale'],
      ['crm', 'sale'],
      ['sale', 'purchase'],
      ['purchase', 'google'],
      ['purchase', 'meta']
    ],

    explanation:
      'A arquitetura conecta os dados de campanha aos identificadores, integrações e sistemas internos. O backend organiza as informações no banco de dados e no CRM. Somente após a confirmação real da venda a conversão retorna às plataformas de anúncios.'
  }
]
