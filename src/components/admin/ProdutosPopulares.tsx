
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const ProdutosPopulares = () => {
  return (
    <ScrollArea className="h-[300px]">
      <div className="text-muted-foreground text-center p-6">
        Nenhum produto cadastrado
      </div>
    </ScrollArea>
  );
};

export default ProdutosPopulares;
