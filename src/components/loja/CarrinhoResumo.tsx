
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, ArrowRight, Ticket, QrCode, User, MapPin } from 'lucide-react';

const CarrinhoResumo = () => {
  const { toast } = useToast();
  const [cupom, setCupom] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('cartao');
  const [dadosCliente, setDadosCliente] = useState({
    nome: 'João Silva',
    email: 'joao@email.com',
    telefone: '(11) 99999-9999',
    endereco: 'Rua das Flores, 123 - São Paulo, SP'
  });
  
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
    if (metodoPagamento === 'pix') {
      toast({
        title: 'PIX Gerado',
        description: 'Seu código PIX foi gerado! Você tem 30 minutos para efetuar o pagamento.',
      });
    } else {
      toast({
        title: 'Processando Pedido',
        description: 'Redirecionando para a página de pagamento...',
      });
    }
  };

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>MuhlStore - Resumo do Pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Dados do Cliente */}
        <div className="space-y-3">
          <h3 className="font-medium flex items-center gap-2">
            <User className="h-4 w-4" />
            Dados de Entrega
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Nome:</span>
              <span>{dadosCliente.nome}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email:</span>
              <span>{dadosCliente.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Telefone:</span>
              <span>{dadosCliente.telefone}</span>
            </div>
            <div className="space-y-1">
              <span className="text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Endereço:
              </span>
              <span className="text-sm">{dadosCliente.endereco}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Método de Pagamento */}
        <div className="space-y-3">
          <h3 className="font-medium">Método de Pagamento</h3>
          <RadioGroup value={metodoPagamento} onValueChange={setMetodoPagamento}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cartao" id="cartao" />
              <Label htmlFor="cartao" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Cartão de Crédito
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pix" id="pix" />
              <Label htmlFor="pix" className="flex items-center gap-2">
                <QrCode className="h-4 w-4" />
                PIX (5% de desconto)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        {/* Resumo de valores */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Frete</span>
            <span>R$ {frete.toFixed(2)}</span>
          </div>
          {metodoPagamento === 'pix' && (
            <div className="flex justify-between text-green-600">
              <span>Desconto PIX (5%)</span>
              <span>-R$ {(subtotal * 0.05).toFixed(2)}</span>
            </div>
          )}
          {desconto > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Cupom de desconto</span>
              <span>-R$ {desconto.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        <Separator />
        
        {/* Total */}
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>R$ {(metodoPagamento === 'pix' ? total - (subtotal * 0.05) : total).toFixed(2)}</span>
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
