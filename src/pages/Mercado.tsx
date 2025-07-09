import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, MapPin, Clock, Award, Eye, Heart, Users } from 'lucide-react';
import storeImage from '@/assets/toy-store-interior.jpg';
import toyVendor from '@/assets/vintage-toy-vendor.jpg';
import toyCollector from '@/assets/toy-collector-1.jpg';
import premiumDisplay from '@/assets/premium-toy-display.jpg';

const Mercado = () => {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('todos');

  const colecionadores = [
    {
      id: 1,
      nome: 'Coleção Nostalgia',
      descricao: 'Especialista em brinquedos vintage dos anos 70-90. Bonecas, carrinhos e jogos raros com certificação de autenticidade.',
      imagem: toyVendor,
      categoria: 'vintage',
      avaliacao: 4.9,
      vendas: 340,
      localizacao: 'São Paulo, SP',
      tempoResposta: '2h',
      produtos: 156,
      destaque: true,
      especialidade: 'Bonecas Vintage'
    },
    {
      id: 2,
      nome: 'Locomotivas & Cia',
      descricao: 'Maior coleção de trens de ferro antigos do Brasil. Peças originais de 1920-1980 restauradas com carinho.',
      imagem: premiumDisplay,
      categoria: 'trens',
      avaliacao: 4.8,
      vendas: 220,
      localizacao: 'Rio de Janeiro, RJ',
      tempoResposta: '1h',
      produtos: 89,
      destaque: true,
      especialidade: 'Trens Antigos'
    },
    {
      id: 3,
      nome: 'Teddy Bears Clássicos',
      descricao: 'Ursinhos de pelúcia colecionáveis e raros. Steiff, Hermann e outras marcas européias autênticas.',
      imagem: toyCollector,
      categoria: 'pelucia',
      avaliacao: 4.7,
      vendas: 180,
      localizacao: 'Belo Horizonte, MG',
      tempoResposta: '3h',
      produtos: 67,
      destaque: false,
      especialidade: 'Ursinhos Steiff'
    },
    {
      id: 4,
      nome: 'Miniaturas Premiadas',
      descricao: 'Carrinhos Hot Wheels, Matchbox e Tomica raros. Edições limitadas e super treasure hunts certificados.',
      imagem: storeImage,
      categoria: 'carrinhos',
      avaliacao: 4.9,
      vendas: 520,
      localizacao: 'Curitiba, PR',
      tempoResposta: '1h',
      produtos: 234,
      destaque: true,
      especialidade: 'Hot Wheels Raros'
    }
  ];

  const categorias = [
    { value: 'todos', label: 'Todas as especialidades' },
    { value: 'vintage', label: 'Brinquedos Vintage' },
    { value: 'trens', label: 'Trens Antigos' },
    { value: 'pelucia', label: 'Pelúcias Colecionáveis' },
    { value: 'carrinhos', label: 'Carrinhos Miniatura' },
    { value: 'bonecas', label: 'Bonecas Clássicas' },
    { value: 'jogos', label: 'Jogos Retro' }
  ];

  const colecionadoresFiltrados = colecionadores.filter(colecionador => {
    const matchBusca = colecionador.nome.toLowerCase().includes(busca.toLowerCase()) ||
                      colecionador.descricao.toLowerCase().includes(busca.toLowerCase()) ||
                      colecionador.especialidade.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = categoria === 'todos' || colecionador.categoria === categoria;
    return matchBusca && matchCategoria;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Mercado de Colecionadores
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Conecte-se com especialistas em brinquedos vintage e descubra peças únicas,
              raras e colecionáveis com história e autenticidade garantida.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Peças Certificadas
              </Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Eye className="w-4 h-4 mr-2" />
                Avaliação Especializada
              </Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Raridades Únicas
              </Badge>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-6 bg-card/50 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar colecionadores, especialidades..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={categoria} onValueChange={setCategoria}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="w-4 h-4 mr-2 text-muted-foreground" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Collectors Grid */}
        <section className="py-16 px-6">
          <div className="container max-w-6xl mx-auto">
            {colecionadoresFiltrados.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  Nenhum colecionador encontrado com os filtros selecionados.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {colecionadoresFiltrados.map((colecionador) => (
                  <Card key={colecionador.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 glass-card">
                    <div className="relative">
                      <img 
                        src={colecionador.imagem} 
                        alt={colecionador.nome}
                        className="w-full h-64 object-cover"
                      />
                      {colecionador.destaque && (
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          <Award className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{colecionador.avaliacao}</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-medium text-primary-foreground">{colecionador.especialidade}</span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {colecionador.nome}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {colecionador.descricao}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{colecionador.localizacao}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>Responde em {colecionador.tempoResposta}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-3 h-3" />
                          <span>{colecionador.vendas} vendas</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Eye className="w-3 h-3" />
                          <span>{colecionador.produtos} itens</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <Badge variant="outline" className="border-primary/20 text-primary">
                          {categorias.find(c => c.value === colecionador.categoria)?.label}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Heart className="w-3 h-3" />
                          </Button>
                          <Button size="sm">Ver Coleção</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-primary to-primary/80">
          <div className="container max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">
              Seja um Colecionador Certificado
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se à nossa comunidade de especialistas e compartilhe sua paixão por brinquedos raros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Tornar-se Colecionador
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Vender Minha Coleção
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Mercado;