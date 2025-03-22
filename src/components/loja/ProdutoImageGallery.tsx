
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Imagens de brinquedos raros da MuhlStore
const toyImages = [
  {
    id: 1,
    url: "/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png",
    alt: "Coleção Toy Story"
  },
  {
    id: 2,
    url: "/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png",
    alt: "Bonecos colecionáveis"
  },
  {
    id: 3,
    url: "/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png",
    alt: "Hot Wheels colecionáveis"
  },
  {
    id: 4,
    url: "/lovable-uploads/d7baf70f-a0a0-4137-b607-9e289e56ff60.png",
    alt: "Banner MuhlStore"
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
