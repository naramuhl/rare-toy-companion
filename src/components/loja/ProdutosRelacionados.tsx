
import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart } from 'lucide-react';
import { produtos } from './dados/produtosData';
import { Produto } from '@/types/produto';

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
      ? produtos.filter(p => p.colecoes?.includes(colecaoId)).slice(0, 6)
      : produtos.slice(0, 6);
  
  const adicionarAoCarrinho = (produto: Produto) => {
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
                  disabled={!(produto.emEstoque || produto.estoque > 0)}
                  onClick={() => adicionarAoCarrinho(produto)}
                >
                  <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                  {(produto.emEstoque || produto.estoque > 0) ? 'Adicionar' : 'Indisponível'}
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
