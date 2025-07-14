import { useState, useEffect } from 'react';
import { productsService } from '@/services/products';
import { Produto } from '@/types/produto';

export const useProducts = () => {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productsService.getProducts();
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar produtos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export const useFeaturedProducts = () => {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productsService.getFeaturedProducts();
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar produtos em destaque');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export const usePromotionProducts = () => {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productsService.getPromotionProducts();
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar produtos em promoção');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export const useNewProducts = () => {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productsService.getNewProducts();
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar novos produtos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await productsService.getProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Erro ao carregar produto');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};

export const useProductsByCollection = (collectionId: string) => {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!collectionId) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productsService.getProductsByCollection(collectionId);
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar produtos da coleção');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [collectionId]);

  return { products, loading, error };
};

export const useSearchProducts = (searchTerm: string) => {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productsService.searchProducts(searchTerm);
        setProducts(data);
      } catch (err) {
        setError('Erro ao buscar produtos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchProducts, 300); // Debounce search
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return { products, loading, error };
};

export const useRelatedProducts = (productId: string, limit: number = 4) => {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productsService.getRelatedProducts(productId, limit);
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar produtos relacionados');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productId, limit]);

  return { products, loading, error };
};