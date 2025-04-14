
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Package, User, MapPin, Heart, LogOut, ShoppingBag, 
  Bell, CreditCard, Settings, Users 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const MinhaConta = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pedidos');
  
  // Dados simulados para demonstração
  const pedidos = [
    {
      id: 'PED-001',
      data: '15/03/2024',
      status: 'Entregue',
      valor: 349.90,
      itens: 3
    },
    {
      id: 'PED-002',
      data: '02/04/2024',
      status: 'Em trânsito',
      valor: 129.90,
      itens: 1
    }
  ];
  
  const enderecos = [
    {
      id: '1',
      nome: 'Casa',
      logradouro: 'Rua das Flores',
      numero: '123',
      bairro: 'Jardim Primavera',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567',
      padrao: true
    }
  ];
  
  const favoritos = [
    {
      id: '1',
      nome: 'Boneco Woody Toy Story',
      preco: 189.90,
      imagemUrl: '/lovable-uploads/a2662bdc-7d77-41e6-bb02-befbb64670ea.png'
    },
    {
      id: '3',
      nome: 'Boneco Buzz Lightyear',
      preco: 179.90,
      imagemUrl: '/lovable-uploads/2420466b-bbfd-4926-b8dd-5be2370f8ee1.png'
    }
  ];
  
  const handleLogout = () => {
    toast.success('Logout realizado com sucesso');
    navigate('/');
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-2">
            <div className="p-4 border rounded-lg bg-card shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">João Silva</h3>
                  <p className="text-sm text-muted-foreground">cliente@email.com</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <Button
                  variant={activeTab === 'pedidos' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('pedidos')}
                >
                  <Package className="mr-2 h-4 w-4" />
                  Meus pedidos
                </Button>
                <Button
                  variant={activeTab === 'enderecos' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('enderecos')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Endereços
                </Button>
                <Button
                  variant={activeTab === 'favoritos' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('favoritos')}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Favoritos
                </Button>
                <Button
                  variant={activeTab === 'dados' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('dados')}
                >
                  <User className="mr-2 h-4 w-4" />
                  Meus dados
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-destructive hover:text-destructive"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              </nav>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex-1">
            {activeTab === 'pedidos' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Meus Pedidos</h2>
                {pedidos.length > 0 ? (
                  <div className="space-y-4">
                    {pedidos.map(pedido => (
                      <div key={pedido.id} className="border rounded-lg p-4 bg-card hover:border-primary transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium text-lg">{pedido.id}</h3>
                            <p className="text-sm text-muted-foreground">Data: {pedido.data}</p>
                            <p className="text-sm text-muted-foreground">{pedido.itens} item(ns)</p>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-lg">R$ {pedido.valor.toFixed(2)}</div>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              pedido.status === 'Entregue' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {pedido.status}
                            </span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-2">
                          Ver detalhes
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 bg-muted/50 rounded-lg">
                    <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-2 text-lg font-medium">Nenhum pedido encontrado</h3>
                    <p className="text-muted-foreground mt-1">Você ainda não fez nenhum pedido.</p>
                    <Button className="mt-4" onClick={() => navigate('/loja')}>
                      Ir às compras
                    </Button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'enderecos' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Meus Endereços</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {enderecos.map(endereco => (
                    <div key={endereco.id} className="border rounded-lg p-4 bg-card hover:border-primary transition-colors">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{endereco.nome}</h3>
                        {endereco.padrao && (
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                            Padrão
                          </span>
                        )}
                      </div>
                      <p className="text-sm mt-1">
                        {endereco.logradouro}, {endereco.numero} - {endereco.bairro}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {endereco.cidade} - {endereco.estado}, {endereco.cep}
                      </p>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline" className="text-destructive">Remover</Button>
                      </div>
                    </div>
                  ))}

                  <div className="border border-dashed rounded-lg p-4 flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
                    <div className="text-center">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mx-auto">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <p className="mt-2 font-medium">Adicionar novo endereço</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'favoritos' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Meus Favoritos</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {favoritos.map(produto => (
                    <div key={produto.id} className="border rounded-lg overflow-hidden bg-card hover:border-primary transition-colors">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={produto.imagemUrl} 
                          alt={produto.nome} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium line-clamp-1">{produto.nome}</h3>
                        <p className="text-primary font-bold mt-1">R$ {produto.preco.toFixed(2)}</p>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" className="w-full">Comprar</Button>
                          <Button size="sm" variant="outline" className="text-destructive">
                            <Heart className="h-4 w-4 fill-current" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'dados' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Meus Dados</h2>
                <div className="border rounded-lg p-6 bg-card">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nome" className="block text-sm font-medium">
                          Nome completo
                        </label>
                        <Input id="nome" defaultValue="João Silva" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" defaultValue="cliente@email.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="telefone" className="block text-sm font-medium">
                          Telefone
                        </label>
                        <Input id="telefone" defaultValue="(11) 99999-9999" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="cpf" className="block text-sm font-medium">
                          CPF
                        </label>
                        <Input id="cpf" defaultValue="123.456.789-00" />
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-medium mb-4">Alterar senha</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="senhaAtual" className="block text-sm font-medium">
                            Senha atual
                          </label>
                          <Input id="senhaAtual" type="password" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="novaSenha" className="block text-sm font-medium">
                            Nova senha
                          </label>
                          <Input id="novaSenha" type="password" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="confirmarSenha" className="block text-sm font-medium">
                            Confirmar nova senha
                          </label>
                          <Input id="confirmarSenha" type="password" />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit">Salvar alterações</Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MinhaConta;
