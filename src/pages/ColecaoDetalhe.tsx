
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import CatalogoBrinquedos from '@/components/loja/CatalogoBrinquedos';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Dados simulados para as coleções
const colecoes = [
  {
    id: 'toy-story',
    nome: 'Coleção Toy Story',
    descricao: 'Esta coleção reúne os mais raros e bem conservados brinquedos da franquia Toy Story. Peças originais, algumas ainda em suas embalagens originais, perfeitas para colecionadores e fãs da saga. Todos os produtos são verificados quanto à autenticidade e estado de conservação.',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    quantidadeProdutos: 12,
    tags: ['Bonecos', 'Disney', 'Pixar', 'Colecionáveis']
  },
  {
    id: 'hot-wheels',
    nome: 'Hot Wheels Raros',
    descricao: 'Carrinhos Hot Wheels raros e edições limitadas de várias épocas. Nossa coleção inclui modelos vintage das décadas de 70, 80 e 90, além de edições comemorativas e séries especiais. Ideal para colecionadores exigentes que buscam peças difíceis de encontrar no mercado.',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    quantidadeProdutos: 24,
    tags: ['Carrinhos', 'Vintage', 'Edição Limitada']
  },
  {
    id: 'bonecos-acao',
    nome: 'Bonecos de Ação',
    descricao: 'Os mais icônicos bonecos de ação em perfeito estado de conservação. Nossa seleção inclui figuras de filmes, quadrinhos, desenhos animados e muito mais. Todas as peças passam por uma rigorosa inspeção para garantir qualidade e autenticidade.',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    quantidadeProdutos: 18,
    tags: ['Bonecos', 'Ação', 'Colecionáveis']
  },
  {
    id: 'vintage',
    nome: 'Brinquedos Vintage',
    descricao: 'Uma viagem no tempo com brinquedos clássicos das décadas de 70, 80 e 90. Itens que marcaram gerações e hoje são verdadeiras relíquias para colecionadores. Oferecemos desde brinquedos eletrônicos a jogos de tabuleiro, todos em excelente estado de conservação.',
    imagemUrl: '/lovable-uploads/d7baf70f-a0a0-4137-b607-9e289e56ff60.png',
    quantidadeProdutos: 32,
    tags: ['Vintage', 'Raros', 'Nostalgia']
  }
];

const ColecaoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const animation = useScrollAnimation();
  
  // Encontrar a coleção pelo ID
  const colecao = colecoes.find(col => col.id === id);
  
  // Scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/colecao">Coleções</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{colecao?.nome || 'Detalhes'}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>
      
        {colecao ? (
          <>
            <div className="mb-8">
              <div className="flex gap-2 mb-6">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/colecao')}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Voltar para Coleções
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/loja')}
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Ir para Loja
                </Button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg"
                >
                  <img 
                    src={colecao.imagemUrl} 
                    alt={colecao.nome}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                
                <div 
                  className={`w-full md:w-2/3 space-y-4 ${getAnimationClass(animation.isInView, 'slide-up')}`}
                  ref={animation.ref}
                >
                  <h1 className="text-3xl font-bold text-orange-800">{colecao.nome}</h1>
                  <p className="text-muted-foreground">{colecao.descricao}</p>
                  
                  <div className="flex items-center gap-2 text-orange-800 font-medium">
                    <span className="text-lg">{colecao.quantidadeProdutos}</span> 
                    <span>itens nesta coleção</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {colecao.tags.map(tag => (
                      <Badge key={tag} className="bg-orange-100 text-orange-800 border-orange-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-orange-50 p-6 rounded-lg my-8 border border-orange-100"
              >
                <p className="text-orange-800 italic">
                  "Cada peça desta coleção foi selecionada com cuidado para garantir autenticidade e 
                  preservar a história destes brinquedos icônicos. Ideal para colecionadores exigentes."
                </p>
              </motion.div>
            </div>
            
            <Separator className="my-8" />
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-orange-800">Produtos da Coleção</h2>
              <CatalogoBrinquedos colecaoId={id} />
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Coleção não encontrada</h1>
            <p className="text-muted-foreground mb-6">A coleção que você está procurando não existe ou foi removida.</p>
            <Button 
              onClick={() => navigate('/colecao')}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Ver Todas as Coleções
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ColecaoDetalhe;
