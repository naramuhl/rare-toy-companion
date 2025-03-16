
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Dados simulados para os produtos
const produtos = [
  {
    id: '1',
    nome: 'Boneco Astronauta Espacial',
    preco: 89.90,
    descricao: 'Boneco astronauta com traje espacial e acessórios interativos',
    categoria: 'Bonecos de Ação',
    imagemUrl: 'placeholder.svg',
    emEstoque: true,
    promocao: true,
  },
  {
    id: '2',
    nome: 'Quebra-Cabeça Educativo 100 Peças',
    preco: 49.90,
    descricao: 'Quebra-cabeça educativo com tema de animais da floresta',
    categoria: 'Jogos Educativos',
    imagemUrl: 'placeholder.svg',
    emEstoque: true,
    promocao: false,
  },
  {
    id: '3',
    nome: 'Carrinho de Controle Remoto',
    preco: 129.90,
    descricao: 'Carrinho com controle remoto e bateria recarregável',
    categoria: 'Carrinhos',
    imagemUrl: 'placeholder.svg',
    emEstoque: false,
    promocao: false,
  },
  {
    id: '4',
    nome: 'Kit de Ciências para Crianças',
    preco: 79.90,
    descricao: 'Kit com experimentos científicos seguros para crianças',
    categoria: 'Brinquedos Educativos',
    imagemUrl: 'placeholder.svg',
    emEstoque: true,
    promocao: true,
  },
  {
    id: '5',
    nome: 'Pelúcia Dinossauro Fofinho',
    preco: 59.90,
    descricao: 'Pelúcia de dinossauro macia e lavável',
    categoria: 'Pelúcias',
    imagemUrl: 'placeholder.svg',
    emEstoque: true,
    promocao: false,
  },
  {
    id: '6',
    nome: 'Banco Imobiliário Júnior',
    preco: 89.90,
    descricao: 'Versão infantil do clássico jogo de tabuleiro',
    categoria: 'Jogos de Tabuleiro',
    imagemUrl: 'placeholder.svg',
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
