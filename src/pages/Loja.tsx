
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import CatalogoBrinquedos from '@/components/loja/CatalogoBrinquedos';
import CategoriasFilter from '@/components/loja/CategoriasFilter';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';

const Loja = () => {
  // Scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animation = useScrollAnimation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div 
          ref={animation.ref}
          className={cn(
            "mb-8",
            getAnimationClass(animation.isInView)
          )}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Catálogo de Brinquedos</h1>
          <p className="text-muted-foreground mb-6">
            Descubra nossa coleção exclusiva de brinquedos para todas as idades e interesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <CategoriasFilter />
          </aside>
          
          <main className="lg:col-span-3">
            <CatalogoBrinquedos />
          </main>
        </div>
      </div>
    </Layout>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export default Loja;
