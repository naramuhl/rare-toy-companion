
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ProdutoStatusBadgeProps {
  status: string;
  estoque: number;
}

const ProdutoStatusBadge = ({ status, estoque }: ProdutoStatusBadgeProps) => {
  if (status === 'sem_estoque' || estoque === 0) {
    return <Badge variant="destructive">Sem Estoque</Badge>;
  }
  if (status === 'baixo_estoque' || estoque <= 15) {
    return <Badge variant="outline" className="text-amber-600 border-amber-600">Baixo Estoque</Badge>;
  }
  return <Badge variant="default">Ativo</Badge>;
};

export default ProdutoStatusBadge;
