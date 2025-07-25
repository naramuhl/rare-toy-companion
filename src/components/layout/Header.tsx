
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logoImage from '@/assets/muhlstore-mario-starwars-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300',
        isScrolled ? 'glass-morphism shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="MuhlStore Logo" 
                className="h-10 mr-2"
              />
              <span className="font-bold text-xl tracking-tight text-primary">MuhlStore Galaxy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks className="text-sm" />
          </nav>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Alternar menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          'fixed inset-0 top-16 glass-morphism md:hidden z-40 transform transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <NavLinks onClick={() => setIsMenuOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

// Helper component for navigation links
const NavLinks = ({ className, onClick }: { className?: string; onClick?: () => void }) => (
  <>
    <Link 
      to="/" 
      className={cn("hover-lift font-medium text-foreground", className)} 
      onClick={onClick}
    >
      Início
    </Link>
    <Link 
      to="/collection" 
      className={cn("hover-lift font-medium text-foreground", className)} 
      onClick={onClick}
    >
      Coleção
    </Link>
    <Link 
      to="/marketplace" 
      className={cn("hover-lift font-medium text-foreground", className)} 
      onClick={onClick}
    >
      Mercado
    </Link>
    <Link 
      to="/about" 
      className={cn("hover-lift font-medium text-foreground", className)} 
      onClick={onClick}
    >
      Sobre
    </Link>
    <Link 
      to="/auth/login" 
      className={cn("hover-lift font-medium text-foreground", className)} 
      onClick={onClick}
    >
      Login
    </Link>
    <Button 
      asChild
      onClick={onClick}
      className="hover-lift"
    >
      <Link to="/carrinho">
        <ShoppingCart className="mr-2 h-4 w-4" />
        Carrinho
      </Link>
    </Button>
  </>
);

export default Header;
