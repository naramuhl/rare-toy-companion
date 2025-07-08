import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import collectionImage from '@/assets/vintage-collection-1.jpg';

const Colecao = () => {
  const colecoes = [
    {
      id: 1,
      nome: 'Safari Aventura',
      descricao: 'Explore o mundo selvagem com nossa coleção de animais da savana',
      imagem: collectionImage,
      produtos: 12,
      preco: 'R$ 89,90 - R$ 299,90',
      destaque: true
    },
    {
      id: 2,
      nome: 'Floresta Encantada',
      descricao: 'Descubra a magia da natureza com animais da floresta',
      imagem: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
      produtos: 8,
      preco: 'R$ 65,90 - R$ 199,90',
      destaque: false
    },
    {
      id: 3,
      nome: 'Sabores Artesanais',
      descricao: 'Produtos gourmet selecionados para experiências únicas',
      imagem: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      produtos: 15,
      preco: 'R$ 29,90 - R$ 159,90',
      destaque: true
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Nossa Coleção Exclusiva
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Descubra produtos únicos e especiais, cuidadosamente selecionados para oferecer 
              experiências extraordinárias e momentos inesquecíveis.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-16 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {colecoes.map((colecao) => (
                <Card key={colecao.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={colecao.imagem} 
                      alt={colecao.nome}
                      className="w-full h-48 object-cover"
                    />
                    {colecao.destaque && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Destaque
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute top-4 right-4 bg-card/80 hover:bg-card"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {colecao.nome}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {colecao.descricao}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-muted-foreground">
                        {colecao.produtos} produtos
                      </span>
                      <span className="font-semibold text-foreground">
                        {colecao.preco}
                      </span>
                    </div>
                    
                    <Button className="w-full">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Ver Coleção
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-primary to-primary/80">
          <div className="container max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">
              Não encontrou o que procurava?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco para coleções personalizadas
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Fale Conosco
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Colecao;