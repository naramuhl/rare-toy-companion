
import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import ProdutoStatusBadge from './ProdutoStatusBadge';
import ProdutoAcoesDropdown from './ProdutoAcoesDropdown';

export interface Produto {
  id: string;
  nome: string;
  imagemUrl: string;
  categoria: string;
  preco: number;
  estoque: number;
  status: string;
}

interface ProdutoItemProps {
  produto: Produto;
  onVisualizar: (id: string) => void;
  onEditar: (id: string) => void;
  onDuplicar: (id: string) => void;
  onExcluir: (id: string) => void;
}

const ProdutoItem = ({ 
  produto, 
  onVisualizar, 
  onEditar, 
  onDuplicar, 
  onExcluir 
}: ProdutoItemProps) => {
  return (
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
          <ProdutoStatusBadge status={produto.status} estoque={produto.estoque} />
        </div>
      </TableCell>
      <TableCell className="text-right">
        <ProdutoAcoesDropdown
          produtoId={produto.id}
          onVisualizar={onVisualizar}
          onEditar={onEditar}
          onDuplicar={onDuplicar}
          onExcluir={onExcluir}
        />
      </TableCell>
    </TableRow>
  );
};

export default ProdutoItem;
