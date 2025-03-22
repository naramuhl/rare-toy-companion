
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ProdutoStatusBadgeProps {
  status: string;
  estoque: number;
}

const ProdutoStatusBadge = ({ status, estoque }: ProdutoStatusBadgeProps) => {
  // Status específico definido diretamente
  if (status === 'sem_estoque' || estoque === 0) {
    return <Badge variant="destructive">Sem Estoque</Badge>;
  }
  if (status === 'baixo_estoque' || estoque <= 15) {
    return <Badge variant="outline" className="text-amber-600 border-amber-600">Baixo Estoque</Badge>;
  }
  if (status === 'promocao') {
    return <Badge className="bg-green-500 hover:bg-green-600">Promoção</Badge>;
  }
  if (status === 'lancamento') {
    return <Badge className="bg-purple-500 hover:bg-purple-600">Lançamento</Badge>;
  }
  if (status === 'pre_venda') {
    return <Badge className="bg-blue-500 hover:bg-blue-600">Pré-Venda</Badge>;
  }
  if (status === 'exclusivo') {
    return <Badge className="bg-orange-500 hover:bg-orange-600">Exclusivo</Badge>;
  }
  // Padrão para produtos ativos
  return <Badge variant="default">Ativo</Badge>;
};

export default ProdutoStatusBadge;
