
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Loja from "./pages/Loja";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";
import Carrinho from "./pages/Carrinho";
import Destaques from "./pages/Destaques";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/admin/Dashboard";
import ProdutosAdmin from "./pages/admin/ProdutosAdmin";
import InstagramIntegracao from "./pages/admin/InstagramIntegracao";
import Clientes from "./pages/admin/Clientes";
import Pedidos from "./pages/admin/Pedidos";
import WhatsAppGrupos from "./pages/admin/WhatsAppGrupos";
import HomeConfig from "./pages/admin/HomeConfig";
import NotFound from "./pages/NotFound";
import Colecoes from '@/pages/Colecoes';
import ColecaoDetalhe from '@/pages/ColecaoDetalhe';
import Login from './pages/auth/Login';
import Cadastro from './pages/auth/Cadastro';
import MinhaConta from './pages/cliente/MinhaConta';
import Colecao from './pages/Colecao';
import Mercado from './pages/Mercado';
import Sobre from './pages/Sobre';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/produto/:id" element={<ProdutoDetalhe />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/destaques" element={<Destaques />} />
            
            <Route path="/colecao" element={<Colecoes />} />
            <Route path="/colecao/:id" element={<ColecaoDetalhe />} />
            <Route path="/collection" element={<Colecao />} />
            <Route path="/marketplace" element={<Mercado />} />
            <Route path="/about" element={<Sobre />} />
            
            {/* Rotas de autenticação e conta do cliente */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/cadastro" element={<Cadastro />} />
            <Route path="/minha-conta" element={<MinhaConta />} />
            
            {/* Rotas administrativas */}
            <Route path="/admin" element={<Admin />}>
              <Route index element={<Dashboard />} />
              <Route path="produtos" element={<ProdutosAdmin />} />
              <Route path="instagram" element={<InstagramIntegracao />} />
              <Route path="clientes" element={<Clientes />} />
              <Route path="pedidos" element={<Pedidos />} />
              <Route path="home-config" element={<HomeConfig />} />
              <Route path="whatsapp-grupos" element={<WhatsAppGrupos />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
