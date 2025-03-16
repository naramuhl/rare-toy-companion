
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

const CarrinhoItems = () => {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="text-muted-foreground text-center p-6">
          Nenhum item no carrinho ainda
        </div>
      </Card>
    </div>
  );
};

export default CarrinhoItems;
