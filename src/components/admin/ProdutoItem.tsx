
import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CalendarIcon, PackageIcon } from 'lucide-react';
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
  colecao?: string;
  destaque?: boolean;
  dataLancamento?: string;
  origem?: string;
  fornecedor?: string;
  codigoBarras?: string;
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
  
  // Formatar a data de lançamento se existir
  const dataFormatada = produto.dataLancamento 
    ? new Date(produto.dataLancamento).toLocaleDateString('pt-BR')
    : null;
    
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
          <div>
            <div className="font-medium">{produto.nome}</div>
            {produto.fornecedor && (
              <div className="text-xs text-muted-foreground">
                Fornecedor: {produto.fornecedor}
              </div>
            )}
          </div>
          {produto.destaque && (
            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
              Destaque
            </Badge>
          )}
        </div>
      </TableCell>
      <TableCell>
        <div className="space-y-1">
          <Badge variant="outline">{produto.categoria}</Badge>
          {produto.colecao && (
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <PackageIcon className="h-3 w-3" />
              <span>Coleção: {produto.colecao.replace("-", " ")}</span>
            </div>
          )}
        </div>
      </TableCell>
      <TableCell>
        <div className="space-y-1">
          <div className="font-medium">R$ {produto.preco.toFixed(2)}</div>
          {dataFormatada && (
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <CalendarIcon className="h-3 w-3" />
              <span>Lançamento: {dataFormatada}</span>
            </div>
          )}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className={`${produto.estoque === 0 ? 'text-red-500' : produto.estoque <= 15 ? 'text-amber-500' : ''}`}>
                  {produto.estoque}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Quantidade em estoque</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <ProdutoStatusBadge status={produto.status} estoque={produto.estoque} />
          {produto.origem && (
            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-800 border-blue-200">
              {produto.origem}
            </Badge>
          )}
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
