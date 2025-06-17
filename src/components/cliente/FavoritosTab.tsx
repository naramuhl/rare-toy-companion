
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const FavoritosTab = () => {
  const favoritos = [
    {
      id: '1',
      nome: 'Boneco Woody Toy Story',
      preco: 189.90,
      imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png'
    },
    {
      id: '3',
      nome: 'Boneco Buzz Lightyear',
      preco: 179.90,
      imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meus Favoritos</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {favoritos.map(produto => (
          <div key={produto.id} className="border rounded-lg overflow-hidden bg-card hover:border-primary transition-colors">
            <div className="h-40 overflow-hidden">
              <img 
                src={produto.imagemUrl} 
                alt={produto.nome} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium line-clamp-1">{produto.nome}</h3>
              <p className="text-primary font-bold mt-1">R$ {produto.preco.toFixed(2)}</p>
              <div className="mt-3 flex gap-2">
                <Button size="sm" className="w-full">Comprar</Button>
                <Button size="sm" variant="outline" className="text-destructive">
                  <Heart className="h-4 w-4 fill-current" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritosTab;
