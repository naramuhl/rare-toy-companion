
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Edit, MoreVertical, Trash2, Eye, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Dados simulados dos produtos
const produtosAdmin = [
  {
    id: '1',
    nome: 'Boneco Astronauta Espacial',
    imagemUrl: 'placeholder.svg',
    categoria: 'Bonecos de Ação',
    preco: 89.90,
    estoque: 43,
    status: 'ativo'
  },
  {
    id: '2',
    nome: 'Kit de Ciências para Crianças',
    imagemUrl: 'placeholder.svg',
    categoria: 'Brinquedos Educativos',
    preco: 79.90,
    estoque: 21,
    status: 'ativo'
  },
  {
    id: '3',
    nome: 'Pelúcia Dinossauro Fofinho',
    imagemUrl: 'placeholder.svg',
    categoria: 'Pelúcias',
    preco: 59.90,
    estoque: 65,
    status: 'ativo'
  },
  {
    id: '4',
    nome: 'Carrinho de Controle Remoto',
    imagemUrl: 'placeholder.svg',
    categoria: 'Carrinhos',
    preco: 129.90,
    estoque: 12,
    status: 'baixo_estoque'
  },
  {
    id: '5',
    nome: 'Banco Imobiliário Júnior',
    imagemUrl: 'placeholder.svg',
    categoria: 'Jogos de Tabuleiro',
    preco: 89.90,
    estoque: 38,
    status: 'ativo'
  },
  {
    id: '6',
    nome: 'Quebra-Cabeça Educativo 100 Peças',
    imagemUrl: 'placeholder.svg',
    categoria: 'Jogos Educativos',
    preco: 49.90,
    estoque: 0,
    status: 'sem_estoque'
  },
];

const getStatusBadge = (status: string, estoque: number) => {
  if (status === 'sem_estoque' || estoque === 0) {
    return <Badge variant="destructive">Sem Estoque</Badge>;
  }
  if (status === 'baixo_estoque' || estoque <= 15) {
    return <Badge variant="outline" className="text-amber-600 border-amber-600">Baixo Estoque</Badge>;
  }
  return <Badge variant="default">Ativo</Badge>;
};

const ListaProdutos = () => {
  const { toast } = useToast();
  const [produtos, setProdutos] = useState(produtosAdmin);
  
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
            <TableRow key={produto.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={produto.imagemUrl}
                      alt={produto.nome}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="font-medium">{produto.nome}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{produto.categoria}</Badge>
              </TableCell>
              <TableCell>R$ {produto.preco.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>{produto.estoque}</span>
                  {getStatusBadge(produto.status, produto.estoque)}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => visualizarProduto(produto.id)}>
                      <Eye className="h-4 w-4 mr-2" />
                      Visualizar
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => editarProduto(produto.id)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => duplicarProduto(produto.id)}>
                      <Copy className="h-4 w-4 mr-2" />
                      Duplicar
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={() => excluirProduto(produto.id)}
                      className="text-red-600 focus:text-red-600"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListaProdutos;
