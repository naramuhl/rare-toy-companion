import { useState, useEffect } from 'react';
import { productsService, DatabaseCarouselItem } from '@/services/products';

export const useCarousel = () => {
  const [items, setItems] = useState<DatabaseCarouselItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await productsService.getCarouselItems();
        setItems(data);
      } catch (err) {
        setError('Erro ao carregar itens do carrossel');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { items, loading, error };
};