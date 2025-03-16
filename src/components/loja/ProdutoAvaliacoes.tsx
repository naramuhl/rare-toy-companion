
import React from 'react';
import { Card } from '@/components/ui/card';

const ProdutoAvaliacoes = ({ produtoId }: { produtoId?: string }) => {
  return (
    <Card className="p-4">
      <div className="text-muted-foreground text-center p-6">
        Nenhuma avaliação disponível
      </div>
    </Card>
  );
};

export default ProdutoAvaliacoes;
