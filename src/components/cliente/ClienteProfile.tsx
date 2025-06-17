
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Package, User, MapPin, Heart, LogOut
} from 'lucide-react';

interface ClienteProfileProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  handleLogout: () => void;
}

const ClienteProfile = ({ activeTab, setActiveTab, handleLogout }: ClienteProfileProps) => {
  return (
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
  );
};

export default ClienteProfile;
