
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  MoreHorizontal,
  Search,
  ArrowDownUp,
  Calendar,
  User,
  Package,
  Truck,
  ShoppingBag,
  Eye,
  FileText,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Dados simulados de pedidos
const pedidos = [
  {
    id: 'PED-001',
    cliente: 'João Silva',
    clienteId: '1',
    data: '12/04/2024',
    status: 'entregue',
    itens: 3,
    valor: 349.90,
    formaPagamento: 'Cartão de Crédito'
  },
  {
    id: 'PED-002',
    cliente: 'Maria Santos',
    clienteId: '2',
    data: '10/04/2024',
    status: 'em_transito',
    itens: 2,
    valor: 219.80,
    formaPagamento: 'PIX'
  },
  {
    id: 'PED-003',
    cliente: 'Pedro Oliveira',
    clienteId: '3',
    data: '09/04/2024',
    status: 'processando',
    itens: 1,
    valor: 189.90,
    formaPagamento: 'Boleto'
  },
  {
    id: 'PED-004',
    cliente: 'Ana Pereira',
    clienteId: '4',
    data: '08/04/2024',
    status: 'cancelado',
    itens: 4,
    valor: 559.60,
    formaPagamento: 'Cartão de Crédito'
  },
  {
    id: 'PED-005',
    cliente: 'João Silva',
    clienteId: '1',
    data: '05/04/2024',
    status: 'entregue',
    itens: 2,
    valor: 279.80,
    formaPagamento: 'PIX'
  },
];

const statusMap = {
  entregue: { label: 'Entregue', color: 'default', icon: ShieldCheck },
  em_transito: { label: 'Em Trânsito', color: 'blue', icon: Truck },
  processando: { label: 'Processando', color: 'yellow', icon: Package },
  cancelado: { label: 'Cancelado', color: 'destructive', icon: ShoppingBag },
};

const Pedidos = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pedidos</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar pedidos..."
              className="pl-9 w-full"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Status</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Todos</DropdownMenuItem>
                <DropdownMenuItem>Entregue</DropdownMenuItem>
                <DropdownMenuItem>Em Trânsito</DropdownMenuItem>
                <DropdownMenuItem>Processando</DropdownMenuItem>
                <DropdownMenuItem>Cancelado</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <ArrowDownUp className="mr-2 h-4 w-4" />
                  Ordenar
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Mais recentes</DropdownMenuItem>
                <DropdownMenuItem>Mais antigos</DropdownMenuItem>
                <DropdownMenuItem>Maior valor</DropdownMenuItem>
                <DropdownMenuItem>Menor valor</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pedido</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Itens</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Pagamento</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pedidos.map(pedido => {
                const status = statusMap[pedido.status] || { label: pedido.status, color: 'default', icon: Package };
                const StatusIcon = status.icon;
                
                return (
                  <TableRow key={pedido.id}>
                    <TableCell className="font-medium">{pedido.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{pedido.cliente}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{pedido.data}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          pedido.status === 'entregue' ? 'default' : 
                          pedido.status === 'em_transito' ? 'outline' : 
                          pedido.status === 'processando' ? 'secondary' : 
                          'destructive'
                        }
                        className="flex items-center gap-1"
                      >
                        <StatusIcon className="h-3 w-3" />
                        <span>{status.label}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>{pedido.itens}</TableCell>
                    <TableCell>R$ {pedido.valor.toFixed(2)}</TableCell>
                    <TableCell>
                      <span className="text-sm">{pedido.formaPagamento}</span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Abrir menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            <span>Ver detalhes</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Send className="mr-2 h-4 w-4" />
                            <span>Atualizar status</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Nota fiscal</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
