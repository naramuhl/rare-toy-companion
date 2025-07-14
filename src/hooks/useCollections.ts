import { useState, useEffect } from 'react';
import { productsService, DatabaseCollection } from '@/services/products';

export const useCollections = () => {
  const [collections, setCollections] = useState<DatabaseCollection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true);
        const data = await productsService.getCollections();
        setCollections(data);
      } catch (err) {
        setError('Erro ao carregar coleções');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return { collections, loading, error };
};