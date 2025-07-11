
import React from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/mario-starwars-hero.jpg';

const Hero = () => {
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <section className="relative pt-28 pb-20 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div 
            ref={titleAnimation.ref} 
            className={cn("mb-8", getAnimationClass(titleAnimation.isInView, 'fade'))}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Personagens Star Wars
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore nossa coleção exclusiva de action figures dos personagens Mario Bros no universo Star Wars. 
              Cada personagem uma nova aventura na galáxia dos cogumelos!
            </p>
          </div>
        </div>

        {/* Personagem Principal */}
        <div 
          ref={subtitleAnimation.ref}
          className={cn(
            "grid lg:grid-cols-2 gap-12 items-center mb-20",
            getAnimationClass(subtitleAnimation.isInView, 'slide-up')
          )}
        >
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Mario Jedi</h2>
            <p className="text-red-100 mb-6">
              O encanador mais famoso da galáxia agora empunha um sabre de luz! 
              Mario se torna um Jedi para proteger o Reino dos Cogumelos das forças do lado sombrio.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={heroImage} 
              alt="Mario Jedi - Action Figure Exclusivo" 
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* CTA Principal */}
        <div 
          ref={ctaAnimation.ref}
          className={cn(
            "text-center",
            getAnimationClass(ctaAnimation.isInView, 'slide-up')
          )}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Ver todos os Personagens Nintendo
          </Button>
        </div>
      </div>
    </section>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export default Hero;
