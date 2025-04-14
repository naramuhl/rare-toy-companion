
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Produto } from '@/types/produto';

interface ProdutoCardProps {
  produto: Produto;
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ produto }) => {
  const { toast } = useToast();

  const adicionarAoCarrinho = () => {
    toast({
      title: 'Produto adicionado!',
      description: `${produto.nome} foi adicionado ao carrinho.`,
    });
  };

  const adicionarAosFavoritos = () => {
    toast({
      title: 'Adicionado aos favoritos!',
      description: `${produto.nome} foi adicionado à sua lista de desejos.`,
    });
  };

  // Verificar se o produto está em estoque
  const emEstoque = produto.emEstoque !== undefined ? produto.emEstoque : produto.estoque > 0;

  return (
    <Card key={produto.id} className="overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <AspectRatio ratio={4/3}>
          <div className="relative h-full">
            <img 
              src={produto.imagemUrl} 
              alt={produto.nome}
              className="object-cover w-full h-full"
            />
            {produto.promocao && (
              <Badge className="absolute top-2 right-2 bg-red-500">Promoção</Badge>
            )}
            {produto.lancamento && (
              <Badge className="absolute top-2 right-2 bg-blue-500">Lançamento</Badge>
            )}
            {produto.destaque && !produto.promocao && !produto.lancamento && (
              <Badge className="absolute top-2 right-2 bg-amber-500">Destaque</Badge>
            )}
          </div>
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-2">{produto.nome}</h3>
          <Badge variant="outline" className="ml-2 whitespace-nowrap">
            {produto.categoria}
          </Badge>
        </div>
        <p className="text-xl font-bold text-primary mb-2">
          R$ {produto.preco.toFixed(2)}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {produto.descricao}
        </p>
        <div className="flex items-center">
          <Badge 
            variant={emEstoque ? "default" : "destructive"}
            className="text-xs"
          >
            {emEstoque ? 'Em estoque' : 'Fora de estoque'}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 gap-2 flex">
        <Button 
          onClick={adicionarAoCarrinho} 
          className="flex-1"
          disabled={!emEstoque}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          onClick={adicionarAosFavoritos}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProdutoCard;
