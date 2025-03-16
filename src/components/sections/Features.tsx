
import React from 'react';
import GlassCard from '@/components/ui/glass-card';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import { Search, BarChart3, Database, Shield, Zap, RefreshCw } from 'lucide-react';

const features = [
  {
    title: 'Intelligent Search',
    description: 'Find any item in your collection instantly with our smart search capabilities.',
    icon: Search,
  },
  {
    title: 'Market Analytics',
    description: 'Track market trends and price history to make informed collecting decisions.',
    icon: BarChart3,
  },
  {
    title: 'Secure Storage',
    description: 'Your collection data is securely stored and backed up automatically.',
    icon: Database,
  },
  {
    title: 'Privacy Protection',
    description: 'Control exactly who sees your collection with granular privacy settings.',
    icon: Shield,
  },
  {
    title: 'Lightning Fast',
    description: 'Experience incredible performance with our optimized application.',
    icon: Zap,
  },
  {
    title: 'Regular Updates',
    description: 'Enjoy new features and improvements delivered regularly.',
    icon: RefreshCw,
  },
];

const Features = () => {
  const titleAnimation = useScrollAnimation();
  
  return (
    <section className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <div 
          ref={titleAnimation.ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16",
            getAnimationClass(titleAnimation.isInView)
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Thoughtfully Crafted Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Every detail has been considered to create a seamless experience for collectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  feature, 
  index 
}: { 
  feature: { title: string; description: string; icon: React.FC<any> }; 
  index: number;
}) => {
  const Icon = feature.icon;
  const animation = useScrollAnimation();
  
  return (
    <div
      ref={animation.ref}
      className={cn(
        "transition-all duration-500",
        getAnimationClass(animation.isInView, 'slide-up')
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <GlassCard className="h-full hover-lift">
        <div className="flex flex-col h-full">
          <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      </GlassCard>
    </div>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export default Features;
