
import { Produto } from '@/types/produto';

// Dados simulados para os produtos com imagens reais
export const produtos: Produto[] = [
  {
    id: '1',
    nome: 'Boneco Woody Toy Story',
    preco: 189.90,
    descricao: 'Boneco colecionável Woody em perfeito estado',
    categoria: 'Bonecos de Ação',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    emEstoque: true,
    estoque: 43,
    status: 'ATIVO',
    promocao: true,
    lancamento: false,
    destaque: true,
    colecoes: ['toy-story', 'bonecos-acao']
  },
  {
    id: '2',
    nome: 'Coleção Hot Wheels Vintage',
    preco: 249.90,
    descricao: 'Conjunto de carrinhos Hot Wheels raros da década de 90',
    categoria: 'Carrinhos',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    emEstoque: true,
    estoque: 21,
    status: 'ATIVO',
    promocao: false,
    lancamento: true,
    destaque: false,
    colecoes: ['hot-wheels', 'vintage']
  },
  {
    id: '3',
    nome: 'Boneco Buzz Lightyear',
    preco: 179.90,
    descricao: 'Boneco Buzz Lightyear original em excelente estado',
    categoria: 'Bonecos de Ação',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    emEstoque: false,
    estoque: 0,
    status: 'SEM_ESTOQUE',
    promocao: false,
    lancamento: false,
    destaque: true,
    colecoes: ['toy-story', 'bonecos-acao']
  },
  {
    id: '4',
    nome: 'Barbie Vintage Anos 80',
    preco: 299.90,
    descricao: 'Barbie rara em perfeito estado com roupas originais',
    categoria: 'Bonecas',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    emEstoque: true,
    estoque: 12,
    status: 'BAIXO_ESTOQUE',
    promocao: true,
    lancamento: false,
    destaque: false,
    colecoes: ['vintage']
  },
  {
    id: '5',
    nome: 'Coleção Toy Story Completa',
    preco: 459.90,
    descricao: 'Kit completo com todos os personagens de Toy Story',
    categoria: 'Colecionáveis',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    emEstoque: true,
    estoque: 38,
    status: 'ATIVO',
    promocao: false,
    lancamento: true,
    destaque: true,
    colecoes: ['toy-story']
  },
  {
    id: '6',
    nome: 'Hot Wheels Raros Anos 70',
    preco: 389.90,
    descricao: 'Carrinhos Hot Wheels raros em ótimo estado de conservação',
    categoria: 'Carrinhos',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    emEstoque: true,
    estoque: 15,
    status: 'ATIVO',
    promocao: false,
    lancamento: false,
    destaque: true,
    colecoes: ['hot-wheels', 'vintage']
  },
];
