
import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart } from 'lucide-react';

// Dados simulados para os produtos com imagens reais
const produtos = [
  {
    id: '1',
    nome: 'Boneco Woody Toy Story',
    preco: 189.90,
    categoria: 'Bonecos de Ação',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    emEstoque: true,
    promocao: true,
    colecoes: ['toy-story', 'bonecos-acao']
  },
  {
    id: '2',
    nome: 'Coleção Hot Wheels Vintage',
    preco: 249.90,
    categoria: 'Carrinhos',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    emEstoque: true,
    promocao: false,
    colecoes: ['hot-wheels', 'vintage']
  },
  {
    id: '3',
    nome: 'Boneco Buzz Lightyear',
    preco: 179.90,
    categoria: 'Bonecos de Ação',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    emEstoque: false,
    promocao: false,
    colecoes: ['toy-story', 'bonecos-acao']
  },
  {
    id: '4',
    nome: 'Barbie Vintage Anos 80',
    preco: 299.90,
    categoria: 'Bonecas',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    emEstoque: true,
    promocao: true,
    colecoes: ['vintage']
  }
];

interface ProdutosRelacionadosProps {
  produtoId?: string;
  colecaoId?: string;
}

const ProdutosRelacionados = ({ produtoId, colecaoId }: ProdutosRelacionadosProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Filtrar produtos relacionados com base na coleção ou categoria do produto atual
  const produtosRelacionados = produtoId 
    ? produtos.filter(p => p.id !== produtoId).slice(0, 6) 
    : colecaoId 
      ? produtos.filter(p => p.colecoes.includes(colecaoId)).slice(0, 6)
      : produtos.slice(0, 6);
  
  const adicionarAoCarrinho = (produto: typeof produtos[0]) => {
    toast({
      title: 'Produto adicionado!',
      description: `${produto.nome} foi adicionado ao carrinho.`,
    });
  };
  
  const verProduto = (id: string) => {
    navigate(`/produto/${id}`);
  };

  return (
    <ScrollArea>
      <div className="flex space-x-4 pb-4">
        {produtosRelacionados.length > 0 ? (
          produtosRelacionados.map((produto) => (
            <Card key={produto.id} className="flex-shrink-0 w-[260px] overflow-hidden">
              <div className="cursor-pointer" onClick={() => verProduto(produto.id)}>
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
              </div>
              
              <CardContent className="p-3">
                <h3 
                  className="font-medium text-sm line-clamp-2 cursor-pointer hover:text-orange-700"
                  onClick={() => verProduto(produto.id)}
                >
                  {produto.nome}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-bold text-orange-600">
                    R$ {produto.preco.toFixed(2)}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {produto.categoria}
                  </Badge>
                </div>
              </CardContent>
              
              <CardFooter className="p-3 pt-0">
                <Button 
                  size="sm"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-xs"
                  disabled={!produto.emEstoque}
                  onClick={() => adicionarAoCarrinho(produto)}
                >
                  <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                  {produto.emEstoque ? 'Adicionar' : 'Indisponível'}
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Card className="flex-shrink-0 w-[260px] p-4">
            <div className="text-muted-foreground text-center">
              Nenhum produto relacionado encontrado.
            </div>
          </Card>
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ProdutosRelacionados;
