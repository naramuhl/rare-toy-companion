
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Imagens fictícias de brinquedos raros
const toyImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    alt: "Robô vintage raro"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    alt: "Drone colecionável raro"
  }
];

const ProdutoImageGallery = ({ produtoId }: { produtoId?: string }) => {
  const [selectedImage, setSelectedImage] = useState(toyImages[0]);

  // Aqui poderíamos buscar imagens específicas com base no produtoId
  
  return (
    <div className="space-y-4">
      <AspectRatio ratio={1}>
        <img 
          src={selectedImage.url} 
          alt={selectedImage.alt}
          className="h-full w-full object-cover rounded-lg border border-border"
        />
      </AspectRatio>
      
      {/* Miniaturas das imagens */}
      <div className="grid grid-cols-4 gap-2">
        {toyImages.map((image) => (
          <div 
            key={image.id}
            className={cn(
              "cursor-pointer rounded-md overflow-hidden border-2",
              selectedImage.id === image.id 
                ? "border-primary" 
                : "border-transparent hover:border-muted"
            )}
            onClick={() => setSelectedImage(image)}
          >
            <AspectRatio ratio={1}>
              <img 
                src={image.url} 
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdutoImageGallery;
