
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import CatalogoBrinquedos from '@/components/loja/CatalogoBrinquedos';
import CategoriasFilter from '@/components/loja/CategoriasFilter';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Package, Gift, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Loja = () => {
  const [activeView, setActiveView] = useState("todos");
  const navigate = useNavigate();
  
  // Scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animation = useScrollAnimation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          ref={animation.ref}
          className={cn(
            "mb-8",
            getAnimationClass(animation.isInView)
          )}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-orange-800">Catálogo de Brinquedos</h1>
              <p className="text-muted-foreground">
                Descubra nossa coleção exclusiva de brinquedos para todas as idades e interesses.
              </p>
            </div>
            <Button 
              onClick={() => navigate('/colecao')}
              className="bg-orange-500 hover:bg-orange-600"
            >
              <Package className="mr-2 h-4 w-4" />
              Ver Coleções Especiais
            </Button>
          </div>
          
          <Tabs defaultValue="todos" className="w-full mb-6" onValueChange={setActiveView}>
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="destaques" className="flex items-center">
                <Star className="mr-1 h-3 w-3" />
                Destaques
              </TabsTrigger>
              <TabsTrigger value="promocoes" className="flex items-center">
                <Gift className="mr-1 h-3 w-3" />
                Promoções
              </TabsTrigger>
              <TabsTrigger value="lancamentos" className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                Lançamentos
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <CategoriasFilter />
          </aside>
          
          <main className="lg:col-span-3">
            <CatalogoBrinquedos filtroView={activeView} />
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Loja;
