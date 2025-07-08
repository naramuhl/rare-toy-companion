import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, MapPin, Clock, Users } from 'lucide-react';

const Mercado = () => {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('todos');

  const vendedores = [
    {
      id: 1,
      nome: 'Artesanatos da Vila',
      descricao: 'Produtos artesanais únicos feitos à mão com amor e tradição',
      imagem: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      categoria: 'artesanato',
      avaliacao: 4.9,
      vendas: 1250,
      localizacao: 'São Paulo, SP',
      tempoResposta: '2h',
      produtos: 45,
      destaque: true
    },
    {
      id: 2,
      nome: 'Sabores Regionais',
      descricao: 'Delícias gastronômicas regionais direto do produtor para sua mesa',
      imagem: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      categoria: 'alimentacao',
      avaliacao: 4.7,
      vendas: 890,
      localizacao: 'Minas Gerais',
      tempoResposta: '4h',
      produtos: 28,
      destaque: false
    },
    {
      id: 3,
      nome: 'Eco Produtos',
      descricao: 'Produtos sustentáveis para um estilo de vida mais consciente',
      imagem: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
      categoria: 'sustentavel',
      avaliacao: 4.8,
      vendas: 670,
      localizacao: 'Rio de Janeiro, RJ',
      tempoResposta: '1h',
      produtos: 33,
      destaque: true
    }
  ];

  const categorias = [
    { value: 'todos', label: 'Todas as categorias' },
    { value: 'artesanato', label: 'Artesanato' },
    { value: 'alimentacao', label: 'Alimentação' },
    { value: 'sustentavel', label: 'Sustentável' },
    { value: 'decoracao', label: 'Decoração' },
    { value: 'moda', label: 'Moda' }
  ];

  const vendedoresFiltrados = vendedores.filter(vendedor => {
    const matchBusca = vendedor.nome.toLowerCase().includes(busca.toLowerCase()) ||
                      vendedor.descricao.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = categoria === 'todos' || vendedor.categoria === categoria;
    return matchBusca && matchCategoria;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-orange-800 mb-6">
              Mercado de Vendedores
            </h1>
            <p className="text-xl text-orange-600 mb-8 max-w-3xl mx-auto">
              Conecte-se com vendedores locais e descubra produtos únicos, 
              artesanais e especiais de todo o Brasil.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-6 bg-white/50 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 w-4 h-4" />
                <Input
                  placeholder="Buscar vendedores..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="pl-10 border-orange-200 focus:border-orange-400"
                />
              </div>

              <Select value={categoria} onValueChange={setCategoria}>
                <SelectTrigger className="w-full md:w-48 border-orange-200">
                  <Filter className="w-4 h-4 mr-2 text-orange-400" />
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

        {/* Vendors Grid */}
        <section className="py-16 px-6">
          <div className="container max-w-6xl mx-auto">
            {vendedoresFiltrados.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-orange-600">
                  Nenhum vendedor encontrado com os filtros selecionados.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vendedoresFiltrados.map((vendedor) => (
                  <Card key={vendedor.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative">
                      <img 
                        src={vendedor.imagem} 
                        alt={vendedor.nome}
                        className="w-full h-48 object-cover"
                      />
                      {vendedor.destaque && (
                        <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600">
                          <Star className="w-3 h-3 mr-1" />
                          Destaque
                        </Badge>
                      )}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{vendedor.avaliacao}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-orange-800 mb-2">
                        {vendedor.nome}
                      </h3>
                      <p className="text-orange-600 mb-4 text-sm leading-relaxed">
                        {vendedor.descricao}
                      </p>
                      
                      <div className="space-y-2 mb-4 text-sm text-orange-500">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          <span>{vendedor.localizacao}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>Responde em {vendedor.tempoResposta}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3" />
                          <span>{vendedor.vendas} vendas realizadas</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-orange-500">
                          {vendedor.produtos} produtos
                        </span>
                        <Badge variant="outline" className="border-orange-200 text-orange-600">
                          {categorias.find(c => c.value === vendedor.categoria)?.label}
                        </Badge>
                      </div>
                      
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        Ver Loja
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-orange-500 to-amber-500">
          <div className="container max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Quer vender no nosso mercado?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Cadastre-se como vendedor e alcance milhares de clientes
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-orange-600 hover:bg-orange-50 border-white"
            >
              Seja um Vendedor
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Mercado;