
import React, { useMemo } from 'react';
import ProdutoCard from './ProdutoCard';
import EmptyState from './EmptyState';
import { produtos } from './dados/produtosData';
import { Produto } from '@/types/produto';

export interface CatalogoBrinquedosProps {
  colecaoId?: string;
  filtroView?: string;
}

const CatalogoBrinquedos: React.FC<CatalogoBrinquedosProps> = ({ 
  colecaoId, 
  filtroView = 'todos' 
}) => {
  // Filtragem de produtos com base nos parâmetros
  const produtosFiltrados = useMemo(() => {
    // Primeiro filtramos por coleção, se necessário
    let filtrados = colecaoId 
      ? produtos.filter(produto => produto.colecoes.includes(colecaoId))
      : produtos;
    
    // Depois aplicamos o filtro de view (todos, destaques, promocoes, lancamentos)
    if (filtroView !== 'todos') {
      if (filtroView === 'destaques') {
        filtrados = filtrados.filter(produto => produto.destaque);
      } else if (filtroView === 'promocoes') {
        filtrados = filtrados.filter(produto => produto.promocao);
      } else if (filtroView === 'lancamentos') {
        filtrados = filtrados.filter(produto => produto.lancamento);
      }
    }
    
    return filtrados;
  }, [colecaoId, filtroView]);

  if (produtosFiltrados.length === 0) {
    return <EmptyState message="Nenhum produto encontrado nesta coleção." />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {produtosFiltrados.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

export default CatalogoBrinquedos;
