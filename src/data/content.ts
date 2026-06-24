/** Coloque sua foto em public/images/profile.jpg (ou altere o caminho abaixo). */
export const profileImage = '/images/profile.jpg'

export type NavLink = { href: string; label: string }
export const navLinks: NavLink[] = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#atuacao', label: 'Atuação' },
  { href: '#regiao', label: 'Região' },
]

export type Stat = { value: string; label: string }
export const heroStats: Stat[] = [
  { value: '8+', label: 'anos em UTI hospitalar' },
  { value: '3', label: 'anos em home care' },
  { value: '1º', label: 'fisioterapeuta cardiovascular na região' },
]

export type TimelineItem = {
  period: string
  title: string
  highlight: boolean
  description: string
}

export const timeline: TimelineItem[] = [
  {
    period: '8 anos',
    title: 'Hospital — UTI',
    highlight: false,
    description:
      'Atendimento em terapia intensiva com ênfase em fisioterapia cardiovascular e pulmonar: suporte ventilatório, higiene brônquica, exercícios precoces, prevenção de complicações e preparo para alta hospitalar segura.',
  },
  {
    period: '3 anos',
    title: 'Home care',
    highlight: false,
    description:
      'Reabilitação domiciliar para pacientes com insuficiência cardíaca, DPOC, pós-operatório cardíaco, sequelas de COVID-19 e outras condições que exigem monitoramento respiratório e funcional contínuo.',
  },
  {
    period: 'Pioneirismo',
    title: 'Referência regional',
    highlight: true,
    description:
      'Primeiro fisioterapeuta com foco em cardiovascular na Zona da Mata mineira — Além Paraíba, Sapucaia, Aventureiro e Leopoldina — ampliando o acesso a cuidados antes disponíveis apenas em grandes centros.',
  },
] as const

export type Area = { icon: string; title: string; description: string }
export const areas: Area[] = [
  {
    icon: '♥',
    title: 'Cardiovascular',
    description:
      'Reabilitação cardíaca, treinamento aeróbio supervisionado, educação em insuficiência cardíaca e recuperação pós-cirurgia ou evento agudo.',
  },
  {
    icon: '◎',
    title: 'Pulmonar',
    description:
      'Desmame ventilatório, expansão pulmonar, manejo de secreções, otimização da mecânica respiratória e exercícios para DPOC e fibrose.',
  },
  {
    icon: '⌂',
    title: 'Domiciliar',
    description:
      'Planos personalizados no lar, orientação a cuidadores, adaptação do ambiente e continuidade do tratamento após alta da UTI.',
  },
  {
    icon: '+',
    title: 'UTI',
    description:
      'Mobilização precoce, prevenção de fraqueza adquirida na UTI, suporte à extubação e transição segura para unidades de menor complexidade.',
  },
]

export const cities: string[] = [
  'Além Paraíba',
  'Sapucaia',
  'Aventureiro',
  'Leopoldina',
]

export type Contact = {
  whatsapp: string
  whatsappDisplay: string
  email: string
  emailDisplay: string
  crefito: string
  instagram?: string
  instagramDisplay?: string
}

export const contact: Contact = {
  whatsapp: 'https://wa.me/5532998428789',
  whatsappDisplay: '(32) 99842-8789',
  email: 'mailto:drkennedyvieira@gmail.com',
  emailDisplay: 'drkennedyvieira@gmail.com',
  crefito: '299218-F',
  instagram: 'https://www.instagram.com/dr.kennedyvieira/',
  instagramDisplay: '@dr.kennedyvieira',
}
