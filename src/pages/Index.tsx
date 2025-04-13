
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import BannerToyHeroes from '@/components/sections/BannerToyHeroes';

const Index = () => {
  // Scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <BannerToyHeroes />
      <Features />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
