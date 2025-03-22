
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import ProdutoItem from './ProdutoItem';
import { produtosAdmin } from './produtosData';
import type { Produto } from './ProdutoItem';

const ListaProdutos = () => {
  const { toast } = useToast();
  const [produtos, setProdutos] = useState<Produto[]>(produtosAdmin);
  
  const excluirProduto = (id: string) => {
    toast({
      title: 'Produto excluído',
      description: 'O produto foi excluído com sucesso.',
    });
    
    // Atualizar a lista removendo o produto
    setProdutos(produtos.filter(produto => produto.id !== id));
  };
  
  const editarProduto = (id: string) => {
    toast({
      title: 'Editar produto',
      description: `Editando produto ID: ${id}`,
    });
  };
  
  const visualizarProduto = (id: string) => {
    toast({
      title: 'Visualizando produto',
      description: `Visualizando detalhes do produto ID: ${id}`,
    });
  };
  
  const duplicarProduto = (id: string) => {
    toast({
      title: 'Produto duplicado',
      description: 'O produto foi duplicado com sucesso.',
    });
  };

  if (produtos.length === 0) {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Estoque</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground">
                Nenhum produto cadastrado
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Estoque</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {produtos.map((produto) => (
            <ProdutoItem
              key={produto.id}
              produto={produto}
              onVisualizar={visualizarProduto}
              onEditar={editarProduto}
              onDuplicar={duplicarProduto}
              onExcluir={excluirProduto}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListaProdutos;
