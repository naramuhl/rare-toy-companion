
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ListaProdutos = () => {
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
};

export default ListaProdutos;
