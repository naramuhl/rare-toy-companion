import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const produtosDestaque = [
  {
    id: 1,
    nome: 'Mario Jedi Master',
    preco: 'R$ 299,90',
    precoOriginal: 'R$ 399,90',
    imagem: '/src/assets/mario-starwars-hero.jpg',
    badge: 'Exclusivo',
    avaliacao: 4.9,
    vendidos: 127,
    descricao: 'Action figure premium com sabre de luz'
  },
  {
    id: 2,
    nome: 'Yoshi Piloto Rebelde',
    preco: 'R$ 249,90',
    imagem: '/src/assets/vintage-toy-vendor.jpg',
    badge: 'Novo',
    avaliacao: 4.8,
    vendidos: 89,
    descricao: 'Edição limitada com X-Wing'
  },
  {
    id: 3,
    nome: 'Bowser Darth Vader',
    preco: 'R$ 399,90',
    imagem: '/src/assets/toy-collector-1.jpg',
    badge: 'Limitado',
    avaliacao: 5.0,
    vendidos: 45,
    descricao: 'Figura articulada com capacete removível'
  },
  {
    id: 4,
    nome: 'Peach Princesa Leia',
    preco: 'R$ 279,90',
    imagem: '/src/assets/premium-toy-display.jpg',
    badge: 'Popular',
    avaliacao: 4.7,
    vendidos: 156,
    descricao: 'Com vestido branco icônico'
  }
];

const ProdutosDestaque = () => {
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
                          ${produto.badge === 'Exclusivo' ? 'bg-red-500 hover:bg-red-600' : ''}
                          ${produto.badge === 'Novo' ? 'bg-green-500 hover:bg-green-600' : ''}
                          ${produto.badge === 'Limitado' ? 'bg-purple-500 hover:bg-purple-600' : ''}
                          ${produto.badge === 'Popular' ? 'bg-blue-500 hover:bg-blue-600' : ''}
                          text-white
                        `}
                      >
                        {produto.badge}
                      </Badge>
                    </div>

                    {/* Heart */}
                    <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 transition-colors" />
                    </button>

                    {/* Imagem */}
                    <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                      <img 
                        src={produto.imagem} 
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
                            className={`w-4 h-4 ${i < Math.floor(produto.avaliacao) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-1">
                        {produto.avaliacao} ({produto.vendidos} vendidos)
                      </span>
                    </div>

                    {/* Info */}
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {produto.nome}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {produto.descricao}
                    </p>

                    {/* Preço */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {produto.preco}
                      </span>
                      {produto.precoOriginal && (
                        <span className="text-sm text-muted-foreground line-through">
                          {produto.precoOriginal}
                        </span>
                      )}
                    </div>

                    {/* Ações */}
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Adicionar
                      </Button>
                      <Button variant="outline" size="sm">
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