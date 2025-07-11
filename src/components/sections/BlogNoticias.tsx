import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const noticias = [
  {
    id: 1,
    titulo: 'Nova Parceria: Nintendo x Star Wars 2024',
    resumo: 'Descubra os próximos lançamentos da colaboração mais esperada do ano...',
    categoria: 'Lançamentos',
    data: '15 Jan 2024',
    tempoLeitura: '3 min',
    imagem: '/src/assets/mario-starwars-banner.jpg',
    destaque: true
  },
  {
    id: 2,
    titulo: 'Guia do Colecionador: Como Avaliar Action Figures',
    resumo: 'Aprenda a identificar peças autênticas e determinar o valor real...',
    categoria: 'Guias',
    data: '12 Jan 2024',
    tempoLeitura: '5 min',
    imagem: '/src/assets/vintage-collection-1.jpg'
  },
  {
    id: 3,
    titulo: 'Timeline: Lançamentos de Fevereiro',
    resumo: 'Marque na agenda! Confira todas as datas de lançamento do próximo mês...',
    categoria: 'Calendar',
    data: '10 Jan 2024',
    tempoLeitura: '2 min',
    imagem: '/src/assets/premium-toy-display.jpg'
  }
];

const guiasColecionador = [
  {
    titulo: 'Como Começar sua Coleção',
    icon: '🚀',
    descricao: 'Primeiros passos para novos colecionadores'
  },
  {
    titulo: 'Cuidados e Preservação',
    icon: '🛡️',
    descricao: 'Mantenha suas peças em perfeito estado'
  },
  {
    titulo: 'Avaliação e Autenticidade',
    icon: '🔍',
    descricao: 'Como identificar peças originais'
  },
  {
    titulo: 'Investimento em Colecionáveis',
    icon: '💎',
    descricao: 'Quais peças têm potencial de valorização'
  }
];

const BlogNoticias = () => {
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
              📰 Blog & Notícias
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fique Por Dentro do Mundo dos Colecionáveis
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notícias, guias, lançamentos e dicas exclusivas para colecionadores
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Artigo Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={noticias[0].imagem}
                  alt={noticias[0].titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 hover:bg-red-600 text-white">
                    {noticias[0].categoria}
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {noticias[0].titulo}
                  </h3>
                  <p className="text-white/90 mb-4">{noticias[0].resumo}</p>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {noticias[0].data}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {noticias[0].tempoLeitura}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Artigos Secundários */}
          <div className="space-y-6">
            {noticias.slice(1).map((noticia, index) => (
              <motion.div
                key={noticia.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="bg-card border rounded-xl p-4 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={noticia.imagem}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {noticia.categoria}
                      </Badge>
                      <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                        {noticia.titulo}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                        {noticia.resumo}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{noticia.data}</span>
                        <span>{noticia.tempoLeitura}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guias do Colecionador */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <Badge className="mb-4" variant="secondary">
              📚 Guias Essenciais
            </Badge>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Guia Completo do Colecionador
            </h3>
            <p className="text-muted-foreground">
              Tudo que você precisa saber para se tornar um expert em colecionáveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {guiasColecionador.map((guia, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{guia.icon}</div>
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {guia.titulo}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {guia.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="group">
              <BookOpen className="w-4 h-4 mr-2" />
              Ver Todos os Guias
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogNoticias;