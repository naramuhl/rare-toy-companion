
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import CatalogoBrinquedos from '@/components/loja/CatalogoBrinquedos';
import { useScrollAnimation, getAnimationClass } from '@/lib/animation';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

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
        {colecao ? (
          <>
            <div className="mb-8">
              <Button 
                variant="outline" 
                className="mb-4"
                onClick={() => navigate('/colecao')}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Voltar para Coleções
              </Button>
              
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
                  <img 
                    src={colecao.imagemUrl} 
                    alt={colecao.nome}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div 
                  className={`w-full md:w-2/3 space-y-4 ${getAnimationClass(animation.isInView, 'slide-up')}`}
                  ref={animation.ref}
                >
                  <h1 className="text-3xl font-bold text-orange-800">{colecao.nome}</h1>
                  <p className="text-muted-foreground">{colecao.descricao}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {colecao.tags.map(tag => (
                      <Badge key={tag} className="bg-orange-100 text-orange-800 border-orange-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Produtos da Coleção</h2>
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
