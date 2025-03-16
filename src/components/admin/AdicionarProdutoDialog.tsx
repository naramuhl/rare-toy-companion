
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AdicionarProdutoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdicionarProdutoDialog = ({ open, onOpenChange }: AdicionarProdutoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Novo Produto</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome do Produto</Label>
            <Input id="nome" placeholder="Digite o nome do produto" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preco">Preço</Label>
            <Input id="preco" type="number" placeholder="0,00" />
          </div>
          <Button className="w-full">Salvar Produto</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdicionarProdutoDialog;
