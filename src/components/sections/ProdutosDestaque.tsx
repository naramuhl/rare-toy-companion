import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useFeaturedProducts } from '@/hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ProdutosDestaque = () => {
  const { products: produtosDestaque, loading, error } = useFeaturedProducts();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddToCart = (produto: any) => {
    toast({
      title: 'Produto adicionado!',
      description: `${produto.nome} foi adicionado ao carrinho.`,
    });
  };

  const handleViewProduct = (id: string) => {
    navigate(`/produto/${id}`);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              🔥 Produtos em Destaque
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coleção Exclusiva Nintendo x Star Wars
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os action figures mais procurados pelos colecionadores. Edições limitadas e exclusivas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-card border rounded-2xl p-6">
                <Skeleton className="aspect-square rounded-xl mb-4" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-8 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4" variant="secondary">
              🔥 Produtos em Destaque
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coleção Exclusiva Nintendo x Star Wars
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os action figures mais procurados pelos colecionadores. Edições limitadas e exclusivas.
            </p>
          </motion.div>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {produtosDestaque.map((produto, index) => (
              <CarouselItem key={produto.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="h-full"
                >
                  <div className="group relative bg-card border rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge 
                        className={`
                          ${produto.promocao ? 'bg-red-500 hover:bg-red-600' : ''}
                          ${produto.lancamento ? 'bg-green-500 hover:bg-green-600' : ''}
                          ${!produto.promocao && !produto.lancamento ? 'bg-blue-500 hover:bg-blue-600' : ''}
                          text-white
                        `}
                      >
                        {produto.promocao ? 'Promoção' : produto.lancamento ? 'Novo' : 'Destaque'}
                      </Badge>
                    </div>

                    {/* Heart */}
                    <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 transition-colors" />
                    </button>

                    {/* Imagem */}
                    <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                      <img 
                        src={produto.imagemUrl} 
                        alt={produto.nome}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Avaliação */}
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(produto.avaliacao || 4.5) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-1">
                        {produto.avaliacao || 4.5} ({produto.totalAvaliacoes || 50} avaliações)
                      </span>
                    </div>

                    {/* Info */}
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {produto.nome}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {produto.descricao || `${produto.marca} - ${produto.categoria}`}
                    </p>

                    {/* Preço */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">
                        R$ {produto.preco.toFixed(2)}
                      </span>
                      {produto.promocao && (
                        <span className="text-sm text-muted-foreground line-through">
                          R$ {(produto.preco * 1.3).toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Ações */}
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1" 
                        size="sm"
                        disabled={produto.estoque === 0}
                        onClick={() => handleAddToCart(produto)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {produto.estoque > 0 ? 'Adicionar' : 'Esgotado'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewProduct(produto.id)}
                      >
                        Ver Mais
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ProdutosDestaque;