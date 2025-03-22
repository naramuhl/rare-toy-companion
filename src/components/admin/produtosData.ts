
export interface Produto {
  id: string;
  nome: string;
  imagemUrl: string;
  categoria: string;
  preco: number;
  estoque: number;
  status: string;
  colecao?: string;
  destaque?: boolean;
  dataLancamento?: string;
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
    status: 'ativo',
    colecao: 'toy-story',
    destaque: true,
    dataLancamento: '2023-05-15'
  },
  {
    id: '2',
    nome: 'Coleção Hot Wheels Vintage',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    categoria: 'Carrinhos',
    preco: 249.90,
    estoque: 21,
    status: 'promocao',
    colecao: 'hot-wheels',
    destaque: true,
    dataLancamento: '2023-06-20'
  },
  {
    id: '3',
    nome: 'Boneco Buzz Lightyear',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    categoria: 'Bonecos de Ação',
    preco: 179.90,
    estoque: 65,
    status: 'lancamento',
    colecao: 'toy-story',
    destaque: false,
    dataLancamento: '2024-01-10'
  },
  {
    id: '4',
    nome: 'Barbie Vintage Anos 80',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    categoria: 'Bonecas',
    preco: 299.90,
    estoque: 12,
    status: 'baixo_estoque',
    colecao: 'vintage',
    destaque: true,
    dataLancamento: '2023-08-05'
  },
  {
    id: '5',
    nome: 'Coleção Toy Story Completa',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    categoria: 'Colecionáveis',
    preco: 459.90,
    estoque: 38,
    status: 'exclusivo',
    colecao: 'toy-story',
    destaque: true,
    dataLancamento: '2023-12-15'
  },
  {
    id: '6',
    nome: 'Hot Wheels Raros Anos 70',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    categoria: 'Carrinhos',
    preco: 389.90,
    estoque: 0,
    status: 'sem_estoque',
    colecao: 'hot-wheels',
    destaque: false,
    dataLancamento: '2023-04-18'
  },
  {
    id: '7',
    nome: 'Conjunto LEGO Star Wars',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    categoria: 'Blocos de Montar',
    preco: 349.90,
    estoque: 5,
    status: 'pre_venda',
    colecao: 'vintage',
    destaque: true,
    dataLancamento: '2024-06-01'
  },
  {
    id: '8',
    nome: 'Quebra-Cabeça Disney 1000 peças',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    categoria: 'Jogos e Quebra-Cabeças',
    preco: 129.90,
    estoque: 18,
    status: 'ativo',
    colecao: 'vintage',
    destaque: false,
    dataLancamento: '2023-09-22'
  }
];

// Função para filtrar produtos por coleção
export const getProdutosPorColecao = (colecaoId: string): Produto[] => {
  return produtosAdmin.filter(produto => produto.colecao === colecaoId);
};

// Função para filtrar produtos em destaque
export const getProdutosDestaque = (): Produto[] => {
  return produtosAdmin.filter(produto => produto.destaque);
};

// Função para obter produtos relacionados (mesma categoria)
export const getProdutosRelacionados = (produtoId: string, limite: number = 4): Produto[] => {
  const produto = produtosAdmin.find(p => p.id === produtoId);
  if (!produto) return [];
  
  return produtosAdmin
    .filter(p => p.id !== produtoId && p.categoria === produto.categoria)
    .slice(0, limite);
};
