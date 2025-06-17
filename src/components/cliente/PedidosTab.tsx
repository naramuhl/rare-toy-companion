
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PedidosTab = () => {
  const navigate = useNavigate();
  
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

  return (
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
  );
};

export default PedidosTab;
