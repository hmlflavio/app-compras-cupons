import type { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fone de Ouvido Wireless Premium',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1612858250380-3206795f8a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1MzIxNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Áudio',
    description: 'Experimente um som cristalino com cancelamento ativo de ruído e até 30 horas de bateria. Conforto premium com almofadas macias e faixa ajustável.',
  },
  {
    id: '2',
    name: 'Relógio Inteligente Pro',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1739287700815-7eef4abaab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwbW9kZXJuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzUzNDEyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wearables',
    description: 'Acompanhe suas metas de fitness com monitoramento avançado de saúde, rastreamento GPS e integração perfeita com smartphones. Design resistente à água com tela AMOLED deslumbrante.',
  },
  {
    id: '3',
    name: 'Smartphone Ultra X',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1646719223599-9864b351e242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwZGV2aWNlfGVufDF8fHx8MTc3NTI3MDEyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Celulares',
    description: 'Smartphone de última geração com processador poderoso, sistema de câmera de nível profissional e bateria que dura o dia todo. Design elegante com materiais premium.',
  },
  {
    id: '4',
    name: 'Notebook Pro 15"',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1759668358660-0d06064f0f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMG1vZGVybnxlbnwxfHx8fDE3NzUzMDY2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Computadores',
    description: 'Notebook de alto desempenho perfeito para profissionais criativos. Processamento ultrarrápido, tela deslumbrante e qualidade de construção premium para produtividade em movimento.',
  },
  {
    id: '5',
    name: 'Fones Bluetooth True Wireless',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1760410780969-07be31532d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBjYXNlfGVufDF8fHx8MTc3NTMxOTIyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Áudio',
    description: 'Fones de ouvido wireless compactos com qualidade de som excepcional e bateria de longa duração. Ajuste perfeito com vários tamanhos de pontas e resistência IPX4.',
  },
  {
    id: '6',
    name: 'Kit de Câmera Profissional',
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1729655669048-a667a0b01148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzUzMzg3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Câmeras',
    description: 'Capture fotos e vídeos incríveis com este sistema de câmera profissional. Foco automático avançado, gravação de vídeo 4K e opções versáteis de lentes.',
  },
  {
    id: '7',
    name: 'Tablet Premium',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1769603891182-0316b20ce2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTI3MjQ5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tablets',
    description: 'Tablet versátil com tela deslumbrante e desempenho poderoso. Perfeito para trabalho, criatividade e entretenimento. Inclui suporte para caneta stylus.',
  },
  {
    id: '8',
    name: 'Console de Videogame Pro',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1695028644151-1ec92bae9fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3NzUyNjU0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Games',
    description: 'Console de videogame de nova geração com gráficos incríveis e tempos de carregamento rápidos. Experiência de jogo imersiva com títulos exclusivos e multiplayer online.',
  },
];

export const categories = ['Todos', 'Áudio', 'Wearables', 'Celulares', 'Computadores', 'Câmeras', 'Tablets', 'Games'];