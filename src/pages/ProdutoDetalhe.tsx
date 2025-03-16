
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import ProdutoInfo from '@/components/loja/ProdutoInfo';
import ProdutoImageGallery from '@/components/loja/ProdutoImageGallery';
import ProdutoAvaliacoes from '@/components/loja/ProdutoAvaliacoes';
import ProdutosRelacionados from '@/components/loja/ProdutosRelacionados';

const ProdutoDetalhe = () => {
  const { id } = useParams();
  const animation = useScrollAnimation();
  
  // Scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div 
            ref={animation.ref}
            className={getAnimationClass(animation.isInView)}
          >
            <ProdutoImageGallery produtoId={id} />
          </div>
          
          <div className={getAnimationClass(animation.isInView, 'slide-up')}>
            <ProdutoInfo produtoId={id} />
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Avaliações dos Clientes</h2>
          <ProdutoAvaliacoes produtoId={id} />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
          <ProdutosRelacionados />
        </div>
      </div>
    </Layout>
  );
};

export default ProdutoDetalhe;
