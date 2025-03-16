
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, ArrowRight, Ticket } from 'lucide-react';

const CarrinhoResumo = () => {
  const { toast } = useToast();
  const [cupom, setCupom] = useState('');
  
  // Dados simulados
  const subtotal = 249.70;
  const frete = 15.00;
  const desconto = 0;
  const total = subtotal + frete - desconto;
  
  const aplicarCupom = () => {
    if (cupom.trim() === '') {
      toast({
        title: 'Erro',
        description: 'Por favor, insira um código de cupom.',
        variant: 'destructive',
      });
      return;
    }
    
    toast({
      title: 'Cupom Aplicado',
      description: 'Seu cupom de desconto foi aplicado com sucesso!',
    });
  };
  
  const finalizarCompra = () => {
    toast({
      title: 'Processando Pedido',
      description: 'Redirecionando para a página de pagamento...',
    });
  };

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>MuhlStore - Resumo do Pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Subtotal e outros valores */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Frete</span>
            <span>R$ {frete.toFixed(2)}</span>
          </div>
          {desconto > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Desconto</span>
              <span>-R$ {desconto.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        <Separator />
        
        {/* Total */}
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
        
        {/* Cupom de desconto */}
        <div className="pt-2">
          <p className="mb-2 text-sm font-medium">Cupom de Desconto</p>
          <div className="flex gap-2">
            <Input
              placeholder="Inserir código"
              value={cupom}
              onChange={(e) => setCupom(e.target.value)}
              className="flex-1"
            />
            <Button variant="outline" onClick={aplicarCupom}>
              <Ticket className="h-4 w-4 mr-2" />
              Aplicar
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full" onClick={finalizarCompra}>
          <CreditCard className="h-4 w-4 mr-2" />
          Finalizar Compra
        </Button>
        <div className="w-full text-center">
          <Button variant="link" className="text-sm">
            Continuar Comprando
            <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarrinhoResumo;
