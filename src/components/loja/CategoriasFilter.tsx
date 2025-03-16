
import React from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const CategoriasFilter = () => {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Categorias</h3>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="todos" />
          <label htmlFor="todos">Todos</label>
        </div>
      </div>
    </Card>
  );
};

export default CategoriasFilter;
