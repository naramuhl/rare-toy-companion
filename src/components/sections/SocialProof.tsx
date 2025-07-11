import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Users, ShoppingBag, TrendingUp } from 'lucide-react';

const galeriaClientes = [
  {
    id: 1,
    nome: 'Carlos Santos',
    avatar: 'CS',
    imagem: '/src/assets/toy-collector-1.jpg',
    descricao: 'Minha nova coleção Star Wars x Nintendo!',
    likes: 234
  },
  {
    id: 2,
    nome: 'Ana Silva',
    avatar: 'AS',
    imagem: '/src/assets/vintage-collection-1.jpg',
    descricao: 'Finalmente consegui o Mario Jedi!',
    likes: 187
  },
  {
    id: 3,
    nome: 'Pedro Costa',
    avatar: 'PC',
    imagem: '/src/assets/premium-toy-display.jpg',
    descricao: 'Setup da minha prateleira renovado',
    likes: 156
  },
  {
    id: 4,
    nome: 'Maria Oliveira',
    avatar: 'MO',
    imagem: '/src/assets/toy-store-interior.jpg',
    descricao: 'Viciada em action figures!',
    likes: 203
  }
];

const ultimasCompras = [
  { cliente: 'João M.', produto: 'Mario Jedi Master', tempo: '2 min atrás', local: 'São Paulo' },
  { cliente: 'Ana S.', produto: 'Yoshi Piloto', tempo: '5 min atrás', local: 'Rio de Janeiro' },
  { cliente: 'Carlos R.', produto: 'Bowser Sith', tempo: '8 min atrás', local: 'Belo Horizonte' },
  { cliente: 'Lucia F.', produto: 'Peach Leia', tempo: '12 min atrás', local: 'Salvador' }
];

const SocialProof = () => {
  const [compraAtual, setCompraAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompraAtual((prev) => (prev + 1) % ultimasCompras.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">12.5K+</div>
            <div className="text-sm text-muted-foreground">Colecionadores</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <ShoppingBag className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-foreground">8.2K+</div>
            <div className="text-sm text-muted-foreground">Vendas Este Mês</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-foreground">4.9/5</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-foreground">350+</div>
            <div className="text-sm text-muted-foreground">Produtos Únicos</div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Galeria de Clientes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <Badge className="mb-4" variant="secondary">
                📸 Galeria de Colecionadores
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Veja as Coleções dos Nossos Clientes
              </h3>
              <p className="text-muted-foreground">
                Compartilhe sua coleção e inspire outros colecionadores
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {galeriaClientes.map((cliente, index) => (
                <motion.div
                  key={cliente.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src={cliente.imagem} 
                      alt={cliente.descricao}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs">{cliente.avatar}</AvatarFallback>
                        </Avatar>
                        <span className="text-white text-sm font-medium">{cliente.nome}</span>
                      </div>
                      <p className="text-white/90 text-xs mb-1">{cliente.descricao}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white/80 text-xs">{cliente.likes}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Atividade em Tempo Real */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <Badge className="mb-4" variant="secondary">
                🔴 Atividade ao Vivo
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Últimas Compras
              </h3>
              <p className="text-muted-foreground">
                Veja o que outros colecionadores estão comprando agora
              </p>
            </div>

            <div className="space-y-4">
              {ultimasCompras.map((compra, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: compraAtual === index ? 1 : 0.5,
                    scale: compraAtual === index ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-lg border ${
                    compraAtual === index ? 'bg-primary/5 border-primary/20' : 'bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">{compra.cliente}</div>
                      <div className="text-sm text-muted-foreground">comprou {compra.produto}</div>
                      <div className="text-xs text-muted-foreground">{compra.local}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">{compra.tempo}</div>
                      {compraAtual === index && (
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sistema de Pontos Preview */}
            <div className="mt-8 p-6 bg-card border rounded-xl">
              <div className="text-center">
                <Badge className="mb-3">🏆 Sistema de Pontos</Badge>
                <h4 className="font-bold text-foreground mb-2">Torne-se um Colecionador VIP</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Ganhe pontos a cada compra e desbloqueie benefícios exclusivos
                </p>
                <div className="flex justify-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-bronze rounded-full mx-auto mb-1"></div>
                    <div>Bronze</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-1"></div>
                    <div>Prata</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-1"></div>
                    <div>Ouro</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;