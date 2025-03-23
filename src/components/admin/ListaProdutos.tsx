
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import ProdutoItem from './ProdutoItem';
import { produtosAdmin, buscarProdutosPorNome } from './produtosData';
import type { Produto } from './ProdutoItem';

interface ListaProdutosProps {
  busca?: string;
}

const ListaProdutos = ({ busca }: ListaProdutosProps) => {
  const { toast } = useToast();
  const [produtos, setProdutos] = useState<Produto[]>(produtosAdmin);
  const [termoBusca, setTermoBusca] = useState(busca || '');
  
  // Efeito para atualizar a lista quando o termo de busca mudar
  useEffect(() => {
    if (busca !== undefined) {
      setTermoBusca(busca);
      setProdutos(buscarProdutosPorNome(busca));
    }
  }, [busca]);
  
  // Função para filtrar produtos ao digitar na busca
  const handleBuscaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setTermoBusca(valor);
    setProdutos(buscarProdutosPorNome(valor));
  };
  
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

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar produtos por nome ou categoria..."
          className="pl-8"
          value={termoBusca}
          onChange={handleBuscaChange}
        />
      </div>
      
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
            {produtos.length > 0 ? (
              produtos.map((produto) => (
                <ProdutoItem
                  key={produto.id}
                  produto={produto}
                  onVisualizar={visualizarProduto}
                  onEditar={editarProduto}
                  onDuplicar={duplicarProduto}
                  onExcluir={excluirProduto}
                />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  {termoBusca ? (
                    <>
                      <p className="font-medium">Nenhum produto encontrado</p>
                      <p className="text-sm mt-1">Tente buscar por outro termo</p>
                    </>
                  ) : (
                    <p>Nenhum produto cadastrado</p>
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {produtos.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Exibindo {produtos.length} produtos
        </div>
      )}
    </div>
  );
};

export default ListaProdutos;
