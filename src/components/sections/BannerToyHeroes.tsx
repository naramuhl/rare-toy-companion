
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bannerImage from '@/assets/mario-starwars-banner.jpg';

const BannerToyHeroes = () => {
  const bannerAnimation = useScrollAnimation();

  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-r from-blue-50 to-orange-50">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl" />
      
      <div 
        ref={bannerAnimation.ref}
        className={cn(
          "container mx-auto px-4",
          getAnimationClass(bannerAnimation.isInView)
        )}
      >
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-orange-500/80 z-10" />
          
          {/* Imagem de fundo */}
          <div className="h-64 md:h-80 lg:h-96 relative">
            <img 
              src={bannerImage} 
              alt="Mario Bros Star Wars Action Figures Collection" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Conteúdo do banner */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-lg">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                    Heróis da Galáxia dos Cogumelos!
                  </h2>
                  <p className="mt-3 text-white/90 text-lg drop-shadow-md">
                    Mario Jedi, Luigi Rebelde e Princesa Leia Peach! Action figures raras do crossover mais épico da história!
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Link to="/loja">
                    <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                      Explorar Coleção <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerToyHeroes;
