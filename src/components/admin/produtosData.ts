
export interface Produto {
  id: string;
  nome: string;
  imagemUrl: string;
  categoria: string;
  preco: number;
  estoque: number;
  status: string;
}

// Dados simulados dos produtos
export const produtosAdmin: Produto[] = [
  {
    id: '1',
    nome: 'Boneco Woody Toy Story',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    categoria: 'Bonecos de Ação',
    preco: 189.90,
    estoque: 43,
    status: 'ativo'
  },
  {
    id: '2',
    nome: 'Coleção Hot Wheels Vintage',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    categoria: 'Carrinhos',
    preco: 249.90,
    estoque: 21,
    status: 'ativo'
  },
  {
    id: '3',
    nome: 'Boneco Buzz Lightyear',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    categoria: 'Bonecos de Ação',
    preco: 179.90,
    estoque: 65,
    status: 'ativo'
  },
  {
    id: '4',
    nome: 'Barbie Vintage Anos 80',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    categoria: 'Bonecas',
    preco: 299.90,
    estoque: 12,
    status: 'baixo_estoque'
  },
  {
    id: '5',
    nome: 'Coleção Toy Story Completa',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    categoria: 'Colecionáveis',
    preco: 459.90,
    estoque: 38,
    status: 'ativo'
  },
  {
    id: '6',
    nome: 'Hot Wheels Raros Anos 70',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    categoria: 'Carrinhos',
    preco: 389.90,
    estoque: 0,
    status: 'sem_estoque'
  },
];
