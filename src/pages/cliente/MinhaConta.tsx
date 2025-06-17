
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import ClienteProfile from '@/components/cliente/ClienteProfile';
import PedidosTab from '@/components/cliente/PedidosTab';
import EnderecosTab from '@/components/cliente/EnderecosTab';
import FavoritosTab from '@/components/cliente/FavoritosTab';
import DadosTab from '@/components/cliente/DadosTab';

const MinhaConta = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pedidos');
  
  const handleLogout = () => {
    toast.success('Logout realizado com sucesso');
    navigate('/');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'pedidos':
        return <PedidosTab />;
      case 'enderecos':
        return <EnderecosTab />;
      case 'favoritos':
        return <FavoritosTab />;
      case 'dados':
        return <DadosTab />;
      default:
        return <PedidosTab />;
    }
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <ClienteProfile 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleLogout={handleLogout}
          />
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MinhaConta;
