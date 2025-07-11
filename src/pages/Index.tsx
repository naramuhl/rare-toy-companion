
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import ProdutosDestaque from '@/components/sections/ProdutosDestaque';
import CategoriasVisuais from '@/components/sections/CategoriasVisuais';
import PersonagensColecao from '@/components/sections/PersonagensColecao';
import SocialProof from '@/components/sections/SocialProof';
import BlogNoticias from '@/components/sections/BlogNoticias';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

const Index = () => {
  // Scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <ProdutosDestaque />
      <CategoriasVisuais />
      <PersonagensColecao />
      <SocialProof />
      <BlogNoticias />
      <Features />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
