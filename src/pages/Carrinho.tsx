
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import CarrinhoItems from '@/components/loja/CarrinhoItems';
import CarrinhoResumo from '@/components/loja/CarrinhoResumo';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

const Carrinho = () => {
  // Scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Meu Carrinho</h1>
          <Link to="/loja">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} /> Continuar Comprando
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CarrinhoItems />
          </div>
          
          <div className="lg:col-span-1">
            <CarrinhoResumo />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="max-w-lg w-full p-6 border border-gray-200 rounded-lg bg-muted/30">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-primary" /> 
              Seu carrinho está vazio?
            </h3>
            <p className="text-muted-foreground mb-4">
              Explore nossa coleção de brinquedos e encontre o presente perfeito para as crianças!
            </p>
            <Link to="/loja">
              <Button className="w-full">Ver Catálogo</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Carrinho;
