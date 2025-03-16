
import React from 'react';
import { Button } from '@/components/ui/button';

const ProdutoInfo = ({ produtoId }: { produtoId?: string }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Nome do Produto</h1>
      <p className="text-2xl font-bold text-primary">R$ 0,00</p>
      <p className="text-muted-foreground">Descrição do produto...</p>
      <Button className="w-full">Adicionar ao Carrinho</Button>
    </div>
  );
};

export default ProdutoInfo;
