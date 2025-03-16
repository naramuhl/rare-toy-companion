
import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

const ProdutosRelacionados = () => {
  return (
    <ScrollArea>
      <div className="flex space-x-4 pb-4">
        <Card className="flex-shrink-0 w-[200px] p-4">
          <div className="text-muted-foreground text-center">
            Carregando produtos...
          </div>
        </Card>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ProdutosRelacionados;
