
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Dados simulados para as coleções
const colecoes = [
  {
    id: 'toy-story',
    nome: 'Coleção Toy Story',
    descricao: 'Personagens e brinquedos da famosa franquia Toy Story',
    imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png',
    quantidadeProdutos: 12,
    tags: ['Bonecos', 'Disney', 'Pixar', 'Colecionáveis']
  },
  {
    id: 'hot-wheels',
    nome: 'Hot Wheels Raros',
    descricao: 'Carrinhos raros e edições limitadas Hot Wheels',
    imagemUrl: '/lovable-uploads/5f25d86c-7dd5-4ee8-a882-240f06f77054.png',
    quantidadeProdutos: 24,
    tags: ['Carrinhos', 'Vintage', 'Edição Limitada']
  },
  {
    id: 'bonecos-acao',
    nome: 'Bonecos de Ação',
    descricao: 'Os mais icônicos bonecos de ação em perfeito estado',
    imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png',
    quantidadeProdutos: 18,
    tags: ['Bonecos', 'Ação', 'Colecionáveis']
  },
  {
    id: 'vintage',
    nome: 'Brinquedos Vintage',
    descricao: 'Brinquedos clássicos das décadas de 70, 80 e 90',
    imagemUrl: '/lovable-uploads/d7baf70f-a0a0-4137-b607-9e289e56ff60.png',
    quantidadeProdutos: 32,
    tags: ['Vintage', 'Raros', 'Nostalgia']
  }
];

const ColecoesProdutos = () => {
  const navigate = useNavigate();

  const navegarParaColecao = (id: string) => {
    navigate(`/colecao/${id}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-800">Nossas Coleções</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {colecoes.map((colecao) => (
          <motion.div
            key={colecao.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
              <AspectRatio ratio={16/9}>
                <img 
                  src={colecao.imagemUrl} 
                  alt={colecao.nome}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-lg">{colecao.nome}</h3>
                  <p className="text-white/80 text-sm">{colecao.quantidadeProdutos} produtos</p>
                </div>
              </AspectRatio>
              
              <CardContent className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {colecao.descricao}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {colecao.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-orange-50 text-orange-800 border-orange-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  onClick={() => navegarParaColecao(colecao.id)}
                >
                  Ver Coleção
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ColecoesProdutos;
