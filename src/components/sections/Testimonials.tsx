
import React from 'react';
import GlassCard from '@/components/ui/glass-card';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "This app completely transformed how I manage my collection. The attention to detail is remarkable.",
    author: "Alex Morgan",
    role: "Vintage Toy Collector",
    rating: 5,
  },
  {
    quote: "The clean design and intuitive interface make cataloging my rare toys a joy rather than a chore.",
    author: "Sarah Chen",
    role: "Action Figure Enthusiast",
    rating: 5,
  },
  {
    quote: "I appreciate the thought that went into every aspect of this app. It's functional art.",
    author: "James Wilson",
    role: "Collector for 15+ years",
    rating: 5,
  },
];

const Testimonials = () => {
  const titleAnimation = useScrollAnimation();
  
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="container max-w-7xl mx-auto">
        <div
          ref={titleAnimation.ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16",
            getAnimationClass(titleAnimation.isInView)
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Loved by Collectors
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear what our community has to say about their experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  testimonial, 
  index 
}: { 
  testimonial: { quote: string; author: string; role: string; rating: number };
  index: number;
}) => {
  const animation = useScrollAnimation();
  
  return (
    <div
      ref={animation.ref}
      className={cn(
        "transition-all duration-500",
        getAnimationClass(animation.isInView, 'slide-up')
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <GlassCard className="h-full hover-lift">
        <div className="flex flex-col h-full">
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="mb-6 flex-grow">
            <p className="text-lg italic">{testimonial.quote}</p>
          </blockquote>
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export default Testimonials;
