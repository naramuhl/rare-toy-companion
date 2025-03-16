
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Minus, Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useToast } from '@/hooks/use-toast';

// Dados simulados do carrinho
const itensCarrinho = [
  {
    id: '1',
    produto: {
      id: '1',
      nome: 'Boneco Astronauta Espacial',
      preco: 89.90,
      imagemUrl: 'placeholder.svg',
      cor: 'Branco',
    },
    quantidade: 1,
  },
  {
    id: '2',
    produto: {
      id: '4',
      nome: 'Kit de Ciências para Crianças',
      preco: 79.90,
      imagemUrl: 'placeholder.svg',
      cor: 'Multicolorido',
    },
    quantidade: 2,
  },
];

const CarrinhoItems = () => {
  const { toast } = useToast();

  const removerItem = (id: string) => {
    toast({
      title: 'Item removido',
      description: 'O item foi removido do seu carrinho.',
    });
  };

  const atualizarQuantidade = (id: string, novaQuantidade: number) => {
    // Aqui seria implementada a lógica para atualizar a quantidade
    console.log(`Atualizar item ${id} para quantidade ${novaQuantidade}`);
  };

  // Se o carrinho estiver vazio
  if (itensCarrinho.length === 0) {
    return (
      <Card className="p-4">
        <div className="text-muted-foreground text-center p-6">
          Nenhum item no carrinho ainda
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Itens do Carrinho</h2>
          
          <div className="space-y-6">
            {itensCarrinho.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Imagem do produto */}
                  <div className="w-full sm:w-24 h-24 flex-shrink-0">
                    <AspectRatio ratio={1}>
                      <img 
                        src={item.produto.imagemUrl} 
                        alt={item.produto.nome}
                        className="object-cover w-full h-full rounded-md"
                      />
                    </AspectRatio>
                  </div>
                  
                  {/* Informações do produto */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium">{item.produto.nome}</h3>
                      <p className="text-sm text-muted-foreground">Cor: {item.produto.cor}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2 sm:mt-0">
                      {/* Controles de quantidade */}
                      <div className="flex items-center">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8" 
                          onClick={() => atualizarQuantidade(item.id, Math.max(1, item.quantidade - 1))}
                          disabled={item.quantidade <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-3 w-6 text-center">{item.quantidade}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      {/* Preço */}
                      <div className="text-right">
                        <div className="font-medium">
                          R$ {(item.produto.preco * item.quantidade).toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          R$ {item.produto.preco.toFixed(2)} cada
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botão remover */}
                  <div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removerItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {item.id !== itensCarrinho[itensCarrinho.length - 1].id && <Separator className="my-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarrinhoItems;
