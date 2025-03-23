
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ColecoesProdutos from '@/components/loja/ColecoesProdutos';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Colecoes = () => {
  const animation = useScrollAnimation();
  const navigate = useNavigate();

  // Scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <Button 
            variant="outline" 
            className="mb-4 md:mb-0"
            onClick={() => navigate('/loja')}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar para Loja
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-right"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">Coleções Especiais</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto md:ml-auto md:mr-0">
              Explore nossas coleções únicas e temáticas
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-orange-50 p-6 rounded-lg mb-10 border border-orange-100"
        >
          <p className="text-orange-800">
            Nossas coleções de brinquedos raros e vintage são cuidadosamente selecionadas e organizadas por temas.
            Cada coleção representa uma parte especial da história dos brinquedos, com peças autênticas 
            e em excelente estado de conservação.
          </p>
        </motion.div>
        
        <div 
          className={getAnimationClass(animation.isInView)} 
          ref={animation.ref}
        >
          <ColecoesProdutos />
        </div>
      </div>
    </Layout>
  );
};

export default Colecoes;
