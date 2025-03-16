
import React from 'react';
import { Card } from '@/components/ui/card';

const CatalogoBrinquedos = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="p-4">
        <div className="text-muted-foreground text-center p-6">
          Carregando produtos...
        </div>
      </Card>
    </div>
  );
};

export default CatalogoBrinquedos;
