
import React from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            ref={titleAnimation.ref} 
            className={cn("mb-6", getAnimationClass(titleAnimation.isInView, 'fade'))}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full bg-orange-500/10 text-orange-600 mb-4">
              MuhlStore - Brinquedos Raros e Seminovos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Brinquedos Raros com História e Valor
            </h1>
          </div>
          
          <div 
            ref={subtitleAnimation.ref} 
            className={cn(
              "mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto",
              getAnimationClass(subtitleAnimation.isInView, 'slide-up')
            )}
          >
            Descubra peças únicas e colecionáveis que contam histórias de épocas passadas.
            Na MuhlStore, cada brinquedo é uma relíquia com personalidade própria.
          </div>
          
          <div 
            ref={ctaAnimation.ref} 
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center", 
              getAnimationClass(ctaAnimation.isInView, 'slide-up')
            )}
          >
            <Button size="lg" className="font-medium bg-orange-500 hover:bg-orange-600">
              Explorar Coleção <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="font-medium border-orange-500 text-orange-500 hover:bg-orange-50">
              Nossa História
            </Button>
          </div>
          
          <div className="mt-12">
            <img 
              src="/lovable-uploads/d7baf70f-a0a0-4137-b607-9e289e56ff60.png" 
              alt="MuhlStore - Brinquedos Raros e Seminovos" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export default Hero;
