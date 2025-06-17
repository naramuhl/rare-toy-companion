
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
  User,
  Mail,
  Phone,
  Calendar,
  Search,
  UserPlus,
  FileText,
  Package,
  UserCog,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Dados simulados de clientes
const clientes = [
  {
    id: '1',
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    telefone: '(11) 98765-4321',
    dataCadastro: '12/01/2024',
    totalPedidos: 8,
    totalGasto: 1245.50,
    status: 'ativo'
  },
  {
    id: '2',
    nome: 'Maria Santos',
    email: 'maria.santos@email.com',
    telefone: '(21) 97654-3210',
    dataCadastro: '23/02/2024',
    totalPedidos: 5,
    totalGasto: 875.30,
    status: 'ativo'
  },
  {
    id: '3',
    nome: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    telefone: '(31) 96543-2109',
    dataCadastro: '05/03/2024',
    totalPedidos: 2,
    totalGasto: 329.90,
    status: 'ativo'
  },
  {
    id: '4',
    nome: 'Ana Pereira',
    email: 'ana.pereira@email.com',
    telefone: '(41) 95432-1098',
    dataCadastro: '18/03/2024',
    totalPedidos: 1,
    totalGasto: 159.90,
    status: 'ativo'
  },
  {
    id: '5',
    nome: 'Lucas Costa',
    email: 'lucas.costa@email.com',
    telefone: '(51) 94321-0987',
    dataCadastro: '29/03/2024',
    totalPedidos: 0,
    totalGasto: 0,
    status: 'inativo'
  }
];

const Clientes = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Adicionar Cliente
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar clientes..."
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
                <DropdownMenuItem>Ativos</DropdownMenuItem>
                <DropdownMenuItem>Inativos</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Ordenar por</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Mais recentes</DropdownMenuItem>
                <DropdownMenuItem>Mais pedidos</DropdownMenuItem>
                <DropdownMenuItem>Maior valor gasto</DropdownMenuItem>
                <DropdownMenuItem>Ordem alfabética</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Data de cadastro</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Valor gasto</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientes.map(cliente => (
                <TableRow key={cliente.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{cliente.nome}</div>
                        <div className="text-sm text-muted-foreground">ID: #{cliente.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
                        {cliente.email}
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
                        {cliente.telefone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{cliente.dataCadastro}</span>
                    </div>
                  </TableCell>
                  <TableCell>{cliente.totalPedidos}</TableCell>
                  <TableCell>R$ {cliente.totalGasto.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={cliente.status === 'ativo' ? 'default' : 'secondary'}
                      className="capitalize"
                    >
                      {cliente.status}
                    </Badge>
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
                          <UserCog className="mr-2 h-4 w-4" />
                          <span>Editar cliente</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Package className="mr-2 h-4 w-4" />
                          <span>Ver pedidos</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          <span>Notas</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
