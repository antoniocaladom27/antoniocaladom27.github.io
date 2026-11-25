// Todo o conteúdo do site fica neste arquivo.
// Para atualizar um texto, um link ou um projeto, mude aqui: os componentes só exibem.

const WHATSAPP = '5574999840210'
const MENSAGEM_WHATSAPP = 'Olá, Antonio! Vi o seu portfolio e gostaria de conversar sobre uma vaga.'

export const contato = {
  nome: 'Antonio Calado Moreira',
  nomeCurto: 'Antonio Calado',
  email: 'antonio.caladom27@gmail.com',
  github: 'https://github.com/antoniocaladom27',
  // TODO: colar aqui o link do perfil (ex.: https://www.linkedin.com/in/seu-nome) antes de publicar.
  linkedin: 'https://www.linkedin.com/',
  repositorioDoSite: 'https://github.com/antoniocaladom27/antoniocaladom27.github.io',
  whatsapp: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM_WHATSAPP)}`,
}

export const apresentacao = {
  local: 'Salvador, BA',
  cargo: 'Desenvolvedor full-stack júnior',
  resumo:
    'Estudo Engenharia de Software na Unifacs (6º período) e trabalho como auxiliar em telecomunicações na PremCell, onde criei o sistema que a equipe usa para acompanhar o rollout de sites.',
}

export const projetos = [
  {
    id: 'telecom-sites',
    nome: 'Telecom Sites',
    situacao: 'Em uso na PremCell',
    resumo:
      'Sistema interno para acompanhar o rollout de sites de telecom: VOs, faturamento, frotas e equipes, com relatórios em PDF e Excel.',
    tecnologias: ['React', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    nota: 'Código privado da empresa',
    links: [],
  },
  {
    id: 'guia-da-cegonha',
    nome: 'Guia da Cegonha',
    situacao: 'No ar',
    resumo:
      'Site de conteúdo sobre enxoval de bebê, com produtos do Mercado Livre e publicação automática nas redes sociais.',
    tecnologias: ['Astro', 'Cloudflare Workers'],
    links: [{ texto: 'Visitar o site', href: 'https://guiadacegonha.com.br' }],
  },
  {
    id: 'storm-game-store',
    nome: 'Storm Game Store',
    situacao: 'Projeto da faculdade',
    resumo: 'Loja de jogos digitais com API própria: login, carrinho, avaliações e pagamento simulado.',
    tecnologias: ['React', 'Node.js', 'Express', 'SQLite'],
    links: [{ texto: 'Ver o código', href: 'https://github.com/antoniocaladom27/EntregaFinalA3' }],
  },
]

export const habilidades = [
  'React',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Supabase',
  'APIs REST',
  'Git e GitHub',
  'Figma',
]

export const idioma = 'Inglês intermediário para leitura técnica'
