import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Award, Target, Mail, Phone, MapPin } from 'lucide-react';

const Sobre = () => {
  const valores = [
    {
      icone: Heart,
      titulo: 'Paixão pelo Cliente',
      descricao: 'Colocamos nossos clientes no centro de tudo que fazemos, oferecendo experiências excepcionais.'
    },
    {
      icone: Users,
      titulo: 'Comunidade',
      descricao: 'Conectamos pessoas através de produtos únicos e histórias especiais.'
    },
    {
      icone: Award,
      titulo: 'Qualidade',
      descricao: 'Selecionamos cuidadosamente cada produto para garantir a melhor experiência.'
    },
    {
      icone: Target,
      titulo: 'Inovação',
      descricao: 'Sempre buscamos novas formas de surpreender e encantar nossos clientes.'
    }
  ];

  const equipe = [
    {
      nome: 'Maria Silva',
      cargo: 'Fundadora & CEO',
      descricao: 'Visionária apaixonada por conectar pessoas através de produtos únicos.',
      imagem: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face'
    },
    {
      nome: 'João Santos',
      cargo: 'Diretor de Operações',
      descricao: 'Especialista em logística e experiência do cliente com mais de 10 anos de mercado.',
      imagem: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    {
      nome: 'Ana Costa',
      cargo: 'Curadoria de Produtos',
      descricao: 'Responsável por descobrir e selecionar os produtos mais especiais do Brasil.',
      imagem: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-foreground mb-6">
                  Nossa História
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  A MuhlStore nasceu do sonho de conectar pessoas através de brinquedos únicos e especiais. 
                  Desde 2020, nossa missão é descobrir e compartilhar tesouros de brinquedos raros 
                  e seminovos de todo o Brasil.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Acreditamos que cada brinquedo conta uma história, e nossa paixão é ser a ponte entre 
                  colecionadores e pessoas que valorizam a autenticidade e qualidade.
                </p>
                <Button size="lg">
                  Conheça Nossos Produtos
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop" 
                  alt="Nossa loja"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-orange-600">1000+</div>
                  <div className="text-orange-500">Clientes Felizes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 px-6 bg-white/50 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-orange-800 mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-orange-600 max-w-3xl mx-auto">
                Os princípios que guiam cada decisão e ação em nossa jornada
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <valor.icone className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 mb-3">
                      {valor.titulo}
                    </h3>
                    <p className="text-orange-600 leading-relaxed">
                      {valor.descricao}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="py-16 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-orange-800 mb-4">
                Nossa Equipe
              </h2>
              <p className="text-xl text-orange-600 max-w-3xl mx-auto">
                Conheça as pessoas apaixonadas que tornam a MuhlStore especial
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {equipe.map((membro, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <img 
                      src={membro.imagem} 
                      alt={membro.nome}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-orange-800 mb-1">
                      {membro.nome}
                    </h3>
                    <p className="text-orange-500 font-medium mb-3">
                      {membro.cargo}
                    </p>
                    <p className="text-orange-600 leading-relaxed">
                      {membro.descricao}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="py-16 px-6 bg-gradient-to-r from-orange-500 to-amber-500">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-xl opacity-90">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-xl opacity-90">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-xl opacity-90">Produtos Únicos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-xl opacity-90">Artesãos Parceiros</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="py-16 px-6">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-orange-800 mb-8">
              Entre em Contato
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">Email</h3>
                <p className="text-orange-600">contato@muhlstore.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">Telefone</h3>
                <p className="text-orange-600">(11) 99999-9999</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">Endereço</h3>
                <p className="text-orange-600">São Paulo, SP</p>
              </div>
            </div>

            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Fale Conosco
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sobre;