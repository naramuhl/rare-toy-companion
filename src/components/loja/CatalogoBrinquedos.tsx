
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Dados simulados para os produtos com imagens reais
const produtos = [
  {
    id: '1',
    nome: 'Boneco Woody Toy Story',
    preco: 189.90,
    descricao: 'Boneco colecionável Woody em perfeito estado',
    categoria: 'Bonecos de Ação',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    emEstoque: true,
    promocao: true,
  },
  {
    id: '2',
    nome: 'Coleção Hot Wheels Vintage',
    preco: 249.90,
    descricao: 'Conjunto de carrinhos Hot Wheels raros da década de 90',
    categoria: 'Carrinhos',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    emEstoque: true,
    promocao: false,
  },
  {
    id: '3',
    nome: 'Boneco Buzz Lightyear',
    preco: 179.90,
    descricao: 'Boneco Buzz Lightyear original em excelente estado',
    categoria: 'Bonecos de Ação',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    emEstoque: false,
    promocao: false,
  },
  {
    id: '4',
    nome: 'Barbie Vintage Anos 80',
    preco: 299.90,
    descricao: 'Barbie rara em perfeito estado com roupas originais',
    categoria: 'Bonecas',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    emEstoque: true,
    promocao: true,
  },
  {
    id: '5',
    nome: 'Coleção Toy Story Completa',
    preco: 459.90,
    descricao: 'Kit completo com todos os personagens de Toy Story',
    categoria: 'Colecionáveis',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    emEstoque: true,
    promocao: false,
  },
  {
    id: '6',
    nome: 'Hot Wheels Raros Anos 70',
    preco: 389.90,
    descricao: 'Carrinhos Hot Wheels raros em ótimo estado de conservação',
    categoria: 'Carrinhos',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    emEstoque: true,
    promocao: false,
  },
];

const CatalogoBrinquedos = () => {
  const { toast } = useToast();

  const adicionarAoCarrinho = (produto: typeof produtos[0]) => {
    toast({
      title: 'Produto adicionado!',
      description: `${produto.nome} foi adicionado ao carrinho.`,
    });
  };

  const adicionarAosFavoritos = (produto: typeof produtos[0]) => {
    toast({
      title: 'Adicionado aos favoritos!',
      description: `${produto.nome} foi adicionado à sua lista de desejos.`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {produtos.map((produto) => (
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
                variant={produto.emEstoque ? "default" : "destructive"}
                className="text-xs"
              >
                {produto.emEstoque ? 'Em estoque' : 'Fora de estoque'}
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 gap-2 flex">
            <Button 
              onClick={() => adicionarAoCarrinho(produto)} 
              className="flex-1"
              disabled={!produto.emEstoque}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Adicionar
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => adicionarAosFavoritos(produto)}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CatalogoBrinquedos;
