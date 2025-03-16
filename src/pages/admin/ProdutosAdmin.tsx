
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, Filter } from 'lucide-react';
import ListaProdutos from '@/components/admin/ListaProdutos';
import AdicionarProdutoDialog from '@/components/admin/AdicionarProdutoDialog';

const ProdutosAdmin = () => {
  const [abrirDialogAdicionar, setAbrirDialogAdicionar] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Produtos</h1>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Pesquisar produtos..."
              className="pl-8 w-full sm:w-[300px]"
            />
          </div>
          
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button onClick={() => setAbrirDialogAdicionar(true)}>
            <Plus className="h-4 w-4 mr-2" /> Adicionar Produto
          </Button>
        </div>
      </div>
      
      <ListaProdutos />
      
      <AdicionarProdutoDialog 
        open={abrirDialogAdicionar} 
        onOpenChange={setAbrirDialogAdicionar}
      />
    </div>
  );
};

export default ProdutosAdmin;
