import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Gamepad2, Crown, Sword, Shield } from 'lucide-react';

const categorias = [
  {
    id: 1,
    nome: 'Action Figures',
    descricao: 'Personagens articulados premium',
    icon: Sword,
    quantidade: '150+ itens',
    cor: 'from-blue-500 to-blue-600',
    imagem: '/src/assets/mario-starwars-hero.jpg'
  },
  {
    id: 2,
    nome: 'Colecionáveis',
    descricao: 'Peças raras e exclusivas',
    icon: Crown,
    quantidade: '89+ itens',
    cor: 'from-purple-500 to-purple-600',
    imagem: '/src/assets/vintage-collection-1.jpg'
  },
  {
    id: 3,
    nome: 'Vintage',
    descricao: 'Clássicos dos anos 80/90',
    icon: Star,
    quantidade: '67+ itens',
    cor: 'from-yellow-500 to-orange-500',
    imagem: '/src/assets/vintage-toy-vendor.jpg'
  },
  {
    id: 4,
    nome: 'Gaming',
    descricao: 'Personagens de videogames',
    icon: Gamepad2,
    quantidade: '124+ itens',
    cor: 'from-green-500 to-green-600',
    imagem: '/src/assets/toy-collector-1.jpg'
  },
  {
    id: 5,
    nome: 'Edição Limitada',
    descricao: 'Exclusivos e numerados',
    icon: Shield,
    quantidade: '23+ itens',
    cor: 'from-red-500 to-red-600',
    imagem: '/src/assets/premium-toy-display.jpg'
  }
];

const CategoriasVisuais = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4" variant="outline">
              🎯 Navegue por Categoria
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Encontre Sua Paixão
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore nossa vasta coleção organizada por categorias. Desde clássicos vintage até lançamentos exclusivos.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categorias.map((categoria, index) => (
            <motion.div
              key={categoria.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden bg-card border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={categoria.imagem} 
                    alt={categoria.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${categoria.cor} opacity-80 group-hover:opacity-90 transition-opacity`} />
                </div>

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  <div>
                    <categoria.icon className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{categoria.nome}</h3>
                    <p className="text-white/90 text-sm mb-2">{categoria.descricao}</p>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {categoria.quantidade}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Explorar</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filtros Rápidos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Mais Populares
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Lançamentos
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Menor Preço
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Maior Preço
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Avaliação
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriasVisuais;