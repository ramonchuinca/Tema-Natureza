export const navLinks = [
  { label: 'Fauna', href: '#fauna' },
  { label: 'Rio Amazonas', href: '#rio' },
  { label: 'Plantas', href: '#plantas' },
  { label: 'Mais', href: '#mais' },
  { label: 'Redes', href: '#social' }
]

export const heroVideos = [
  '/video/video1.mp4',
  '/video/video2.mp4',
  '/video/video3.mp4'
]

export const animals = [
  {
    id: 'fauna',
    tag: 'Fauna',
    title: 'Araras da Amazônia',
    text: 'As araras da Amazônia são verdadeiros tesouros coloridos da selva. Com suas plumagens vibrantes e voos majestosos, elas iluminam o dossel da floresta tropical. Essas aves exóticas, conhecidas por sua beleza e inteligência, desempenham um papel vital no ecossistema amazônico.',
    image: '/img/arara.jpg',
    caption: 'ARARA-VERMELHA',
    video: '/video/video1.mp4',
    reverse: false
  },
  {
    id: 'onca',
    tag: 'Predador de topo',
    title: 'A Majestosa Onça-Pintada',
    text: 'A onça-pintada, também conhecida como jaguar, é o maior felino das Américas e um símbolo de força e elegância. Como predador de topo, desempenha um papel vital no equilíbrio dos ecossistemas.',
    image: '/img/onca-pintada.jpg',
    caption: 'ONÇA-PINTADA',
    video: '/video/video3.mp4',
    reverse: true
  },
  {
    id: 'corujas',
    tag: 'Aves noturnas',
    title: 'Corujas: Guardiãs da Noite',
    text: 'As corujas são aves noturnas conhecidas por sua sabedoria e mistério. Com olhos grandes e aguçados, elas caçam presas na escuridão, destacando-se como predadores silenciosos.',
    image: '/img/coruja.jpg',
    caption: 'CORUJA-NOTURNA',
    video: '/video/video2.mp4',
    reverse: false
  }
]

export const rioStats = [
  { value: 6400, suffix: ' km', label: 'de extensão aproximada', icon: 'bi-water' },
  { value: 2500, suffix: '+', label: 'espécies de peixes de água doce', icon: 'bi-fish' },
  { value: 5500000, suffix: ' km²', label: 'de floresta tropical', icon: 'bi-tree' }
]

export const plantas = [
  { nome: 'Andiroba', descricao: 'Óleo usado em cosméticos e tratamentos naturais da pele.', icon: 'bi-droplet-half' },
  { nome: 'Copaíba', descricao: 'Resina aromática tradicionalmente utilizada em remédios caseiros.', icon: 'bi-flower2' },
  { nome: 'Guaraná', descricao: 'Fruto rico em cafeína, símbolo da cultura amazônica.', icon: 'bi-cup-hot' },
  { nome: 'Açaí', descricao: 'Palmeira que fornece um fruto nutritivo e muito apreciado.', icon: 'bi-circle-fill' }
]

export const footerColumns = [
  {
    titulo: 'Produtos',
    itens: ['Óleos Essenciais Amazônicos', 'Artesanato Indígena', 'Produtos Alimentícios Típicos', 'Cosméticos Naturais', 'Livros e Guia de Turismo']
  },
  {
    titulo: 'Região',
    itens: ['Biodiversidade Única', 'Tribos Indígenas', 'Plantas Medicinais', 'Frutas Tropicais', 'Rio Amazonas', 'Floresta Tropical']
  },
  {
    titulo: 'Ajuda',
    itens: ['Preservação Ambiental', 'Desenvolvimento Sustentável']
  }
]

export const socialLinks = [
  { nome: 'Twitter', href: '#', icon: '/img/twiter.jpg' },
  { nome: 'Instagram', href: '#', icon: '/img/instagram-sketched.svg' },
  { nome: 'Facebook', href: '#', icon: '/img/facebook.jpeg' },
  { nome: 'LinkedIn', href: '#', icon: '/img/linkedin3.png' },
  { nome: 'Messenger', href: '#', icon: '/img/mensageiro.png' }
]
