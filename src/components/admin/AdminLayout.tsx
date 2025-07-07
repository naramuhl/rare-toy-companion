import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart,
  Truck,
  Tag,
  Settings,
  LogOut,
  Menu,
  X,
  MessageCircle,
  Instagram
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Produtos', href: '/admin/produtos', icon: Package },
    { name: 'Pedidos', href: '/admin/pedidos', icon: ShoppingCart },
    { name: 'Clientes', href: '/admin/clientes', icon: Users },
    { name: 'WhatsApp Grupos', href: '/admin/whatsapp-grupos', icon: MessageCircle },
    { name: 'Instagram', href: '/admin/instagram', icon: Instagram },
    { name: 'Análises', href: '/admin/analises', icon: BarChart },
    { name: 'Fornecedores', href: '/admin/fornecedores', icon: Truck },
    { name: 'Promoções', href: '/admin/promocoes', icon: Tag },
  ];

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar para desktop */}
      <aside 
        className={cn(
          "fixed inset-y-0 z-50 flex flex-col bg-sidebar border-r border-sidebar-border shadow-md transition-all duration-300 md:left-0",
          sidebarOpen ? "w-64" : "w-20",
          "hidden md:flex"
        )}
      >
        <div className="p-4 flex items-center justify-between">
          <div className={cn("overflow-hidden", !sidebarOpen && "invisible w-0")}>
            <h2 className="text-xl font-bold text-sidebar-foreground">Admin Panel</h2>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5 text-sidebar-foreground" />
          </Button>
        </div>
        
        <ScrollArea className="flex-1 py-2">
          <nav className="px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  !sidebarOpen && "justify-center"
                )}
              >
                <item.icon className={cn("h-5 w-5 shrink-0", sidebarOpen && "mr-3")} />
                {sidebarOpen && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </ScrollArea>
        
        <div className="p-4 border-t border-sidebar-border">
          <div className={cn(
            "flex items-center",
            !sidebarOpen && "justify-center"
          )}>
            <Avatar className="h-9 w-9">
              <AvatarImage src="" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            {sidebarOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium text-sidebar-foreground">Admin</p>
                <p className="text-xs text-muted-foreground">admin@exemplo.com</p>
              </div>
            )}
          </div>
          
          <div className="mt-4">
            <Button 
              variant="outline" 
              className={cn(
                "w-full text-sm border-sidebar-border hover:bg-sidebar-accent",
                !sidebarOpen && "px-0 justify-center"
              )}
            >
              <LogOut className="h-4 w-4 mr-2" />
              {sidebarOpen && "Sair"}
            </Button>
          </div>
        </div>
      </aside>

      {/* Sidebar para mobile */}
      <div className="md:hidden">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setMobileMenuOpen(true)}
          className="fixed top-4 left-4 z-40"
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/80" onClick={() => setMobileMenuOpen(false)}>
            <aside className="fixed inset-y-0 left-0 w-64 bg-sidebar animate-in slide-in-from-left">
              <div className="p-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-sidebar-foreground">Admin Panel</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <nav className="px-2 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      location.pathname === item.href
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </aside>
          </div>
        )}
      </div>

      {/* Conteúdo principal */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        sidebarOpen ? "md:ml-64" : "md:ml-20"
      )}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
