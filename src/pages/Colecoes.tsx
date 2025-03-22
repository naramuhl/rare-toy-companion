
import React from 'react';
import Layout from '@/components/layout/Layout';
import ColecoesProdutos from '@/components/loja/ColecoesProdutos';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import { motion } from 'framer-motion';

const Colecoes = () => {
  const animation = useScrollAnimation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Coleções Especiais</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossas coleções de brinquedos raros e vintage, cuidadosamente selecionados e organizados por temas.
            Cada coleção representa uma parte especial da história dos brinquedos.
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
