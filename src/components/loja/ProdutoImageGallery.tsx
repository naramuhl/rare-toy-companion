
import React, { useState, useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Função para navegar pelas imagens
  const navegarImagens = (direcao: 'anterior' | 'proximo') => {
    const indiceAtual = toyImages.findIndex(img => img.id === selectedImage.id);
    let novoIndice;
    
    if (direcao === 'anterior') {
      novoIndice = (indiceAtual - 1 + toyImages.length) % toyImages.length;
    } else {
      novoIndice = (indiceAtual + 1) % toyImages.length;
    }
    
    setSelectedImage(toyImages[novoIndice]);
  };
  
  // Manipulador para zoom na imagem
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !isZoomed) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomPosition({ x, y });
  };
  
  return (
    <div className="space-y-4">
      {/* Imagem principal com efeito de zoom */}
      <div 
        className="relative overflow-hidden rounded-lg border border-border cursor-zoom-in"
        ref={imageRef}
        onClick={() => setIsZoomed(!isZoomed)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <AspectRatio ratio={1}>
              <div className="relative w-full h-full">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.alt}
                  className={cn(
                    "h-full w-full object-cover rounded-lg transition-transform duration-300",
                    isZoomed && "scale-150"
                  )}
                  style={
                    isZoomed 
                      ? { 
                          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }
                      : undefined
                  }
                />
                
                {/* Ícone de zoom */}
                {!isZoomed && (
                  <div className="absolute right-2 bottom-2 bg-black/50 text-white p-1.5 rounded-full">
                    <Search className="h-4 w-4" />
                  </div>
                )}
              </div>
            </AspectRatio>
          </motion.div>
        </AnimatePresence>
        
        {/* Botões de navegação */}
        <button 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-md"
          onClick={(e) => {
            e.stopPropagation();
            navegarImagens('anterior');
          }}
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-md"
          onClick={(e) => {
            e.stopPropagation();
            navegarImagens('proximo');
          }}
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      {/* Miniaturas das imagens */}
      <div className="grid grid-cols-4 gap-2">
        {toyImages.map((image) => (
          <motion.div 
            key={image.id}
            whileHover={{ scale: 1.05 }}
            className={cn(
              "cursor-pointer rounded-md overflow-hidden border-2",
              selectedImage.id === image.id 
                ? "border-primary ring-2 ring-offset-2 ring-primary/30" 
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProdutoImageGallery;
