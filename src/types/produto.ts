
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
  origem?: string;
  fornecedor?: string;
  codigoBarras?: string;
  promocao?: boolean;
  lancamento?: boolean;
  colecoes?: string[];
}
