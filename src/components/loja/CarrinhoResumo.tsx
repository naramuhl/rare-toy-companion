
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CarrinhoResumo = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>R$ 0,00</span>
        </div>
        <div className="flex justify-between">
          <span>Frete</span>
          <span>R$ 0,00</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>R$ 0,00</span>
          </div>
        </div>
      </div>
      <Button className="w-full">Finalizar Compra</Button>
    </Card>
  );
};

export default CarrinhoResumo;
