
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ProdutoImageGallery = ({ produtoId }: { produtoId?: string }) => {
  return (
    <div className="space-y-4">
      <AspectRatio ratio={1}>
        <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Imagem do Produto</span>
        </div>
      </AspectRatio>
    </div>
  );
};

export default ProdutoImageGallery;
