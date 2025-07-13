import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { 
  Plus, 
  Trash2, 
  Edit, 
  Eye, 
  Upload, 
  Palette, 
  Image as ImageIcon,
  Save,
  RotateCcw
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CarouselItem {
  id: string;
  nome: string;
  preco: string;
  precoOriginal?: string;
  imagem: string;
  badge: string;
  avaliacao: number;
  vendidos: number;
  descricao: string;
  ativo: boolean;
}

interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundType: 'gradient' | 'solid' | 'image';
  heroBackground: string;
  logoUrl: string;
}

const HomeManager = () => {
  const { toast } = useToast();
  
  // Estado do carrossel
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([
    {
      id: '1',
      nome: 'Mario Jedi Master',
      preco: 'R$ 299,90',
      precoOriginal: 'R$ 399,90',
      imagem: '/src/assets/mario-starwars-hero.jpg',
      badge: 'Exclusivo',
      avaliacao: 4.9,
      vendidos: 127,
      descricao: 'Action figure premium com sabre de luz',
      ativo: true
    },
    {
      id: '2',
      nome: 'Yoshi Piloto Rebelde',
      preco: 'R$ 249,90',
      imagem: '/src/assets/vintage-toy-vendor.jpg',
      badge: 'Novo',
      avaliacao: 4.8,
      vendidos: 89,
      descricao: 'Edição limitada com X-Wing',
      ativo: true
    }
  ]);

  // Estado do tema
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    primaryColor: '#8B5CF6',
    secondaryColor: '#06B6D4',
    accentColor: '#F59E0B',
    backgroundType: 'gradient',
    heroBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    logoUrl: '/src/assets/muhlstore-logo.png'
  });

  // Estados de edição
  const [editingItem, setEditingItem] = useState<CarouselItem | null>(null);
  const [newItem, setNewItem] = useState<Partial<CarouselItem>>({});

  const badgeOptions = ['Exclusivo', 'Novo', 'Limitado', 'Popular', 'Em Destaque'];

  const handleSaveCarousel = () => {
    // Aqui salvaria no backend
    toast({
      title: "Carrossel atualizado",
      description: "As alterações do carrossel foram salvas com sucesso.",
    });
  };

  const handleSaveTheme = () => {
    // Aqui salvaria no backend e aplicaria as mudanças no CSS
    toast({
      title: "Tema atualizado", 
      description: "As configurações de tema foram salvas com sucesso.",
    });
  };

  const handleAddItem = () => {
    if (newItem.nome && newItem.preco && newItem.imagem) {
      const item: CarouselItem = {
        id: Date.now().toString(),
        nome: newItem.nome!,
        preco: newItem.preco!,
        precoOriginal: newItem.precoOriginal,
        imagem: newItem.imagem!,
        badge: newItem.badge || 'Novo',
        avaliacao: newItem.avaliacao || 5.0,
        vendidos: newItem.vendidos || 0,
        descricao: newItem.descricao || '',
        ativo: true
      };
      
      setCarouselItems([...carouselItems, item]);
      setNewItem({});
      toast({
        title: "Produto adicionado",
        description: "Novo produto foi adicionado ao carrossel.",
      });
    }
  };

  const handleDeleteItem = (id: string) => {
    setCarouselItems(carouselItems.filter(item => item.id !== id));
    toast({
      title: "Produto removido",
      description: "Produto foi removido do carrossel.",
    });
  };

  const handleToggleItem = (id: string) => {
    setCarouselItems(carouselItems.map(item => 
      item.id === id ? { ...item, ativo: !item.ativo } : item
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gerenciar Home</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Visualizar
          </Button>
        </div>
      </div>

      <Tabs defaultValue="carousel" className="w-full">
        <TabsList className="grid grid-cols-2 w-full max-w-md">
          <TabsTrigger value="carousel">Carrossel</TabsTrigger>
          <TabsTrigger value="theme">Tema</TabsTrigger>
        </TabsList>

        <TabsContent value="carousel" className="space-y-6">
          {/* Adicionar novo item */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Adicionar Produto ao Carrossel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome">Nome do Produto</Label>
                  <Input
                    id="nome"
                    value={newItem.nome || ''}
                    onChange={(e) => setNewItem({ ...newItem, nome: e.target.value })}
                    placeholder="Ex: Mario Jedi Master"
                  />
                </div>
                
                <div>
                  <Label htmlFor="preco">Preço</Label>
                  <Input
                    id="preco"
                    value={newItem.preco || ''}
                    onChange={(e) => setNewItem({ ...newItem, preco: e.target.value })}
                    placeholder="Ex: R$ 299,90"
                  />
                </div>

                <div>
                  <Label htmlFor="precoOriginal">Preço Original (opcional)</Label>
                  <Input
                    id="precoOriginal"
                    value={newItem.precoOriginal || ''}
                    onChange={(e) => setNewItem({ ...newItem, precoOriginal: e.target.value })}
                    placeholder="Ex: R$ 399,90"
                  />
                </div>

                <div>
                  <Label htmlFor="badge">Badge</Label>
                  <Select value={newItem.badge} onValueChange={(value) => setNewItem({ ...newItem, badge: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma badge" />
                    </SelectTrigger>
                    <SelectContent>
                      {badgeOptions.map((badge) => (
                        <SelectItem key={badge} value={badge}>{badge}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="imagem">URL da Imagem</Label>
                  <Input
                    id="imagem"
                    value={newItem.imagem || ''}
                    onChange={(e) => setNewItem({ ...newItem, imagem: e.target.value })}
                    placeholder="Ex: /src/assets/produto.jpg"
                  />
                </div>

                <div>
                  <Label htmlFor="avaliacao">Avaliação (1-5)</Label>
                  <Input
                    id="avaliacao"
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    value={newItem.avaliacao || ''}
                    onChange={(e) => setNewItem({ ...newItem, avaliacao: parseFloat(e.target.value) })}
                    placeholder="Ex: 4.9"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="descricao">Descrição</Label>
                <Textarea
                  id="descricao"
                  value={newItem.descricao || ''}
                  onChange={(e) => setNewItem({ ...newItem, descricao: e.target.value })}
                  placeholder="Descrição do produto..."
                />
              </div>

              <Button onClick={handleAddItem} className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar ao Carrossel
              </Button>
            </CardContent>
          </Card>

          {/* Lista de itens do carrossel */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Produtos no Carrossel</CardTitle>
                <Button onClick={handleSaveCarousel}>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {carouselItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <img 
                        src={item.imagem} 
                        alt={item.nome}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-medium">{item.nome}</h3>
                        <p className="text-sm text-muted-foreground">{item.descricao}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={item.ativo ? "default" : "secondary"}>
                            {item.badge}
                          </Badge>
                          <span className="text-sm font-medium">{item.preco}</span>
                          <span className="text-xs text-muted-foreground">★ {item.avaliacao}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Switch
                        checked={item.ativo}
                        onCheckedChange={() => handleToggleItem(item.id)}
                      />
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theme" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Configurações de Tema
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Cores */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Paleta de Cores</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="primaryColor">Cor Primária</Label>
                    <div className="flex gap-2">
                      <Input
                        id="primaryColor"
                        type="color"
                        value={themeConfig.primaryColor}
                        onChange={(e) => setThemeConfig({ ...themeConfig, primaryColor: e.target.value })}
                        className="w-16 h-10 p-1"
                      />
                      <Input
                        value={themeConfig.primaryColor}
                        onChange={(e) => setThemeConfig({ ...themeConfig, primaryColor: e.target.value })}
                        placeholder="#8B5CF6"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="secondaryColor">Cor Secundária</Label>
                    <div className="flex gap-2">
                      <Input
                        id="secondaryColor"
                        type="color"
                        value={themeConfig.secondaryColor}
                        onChange={(e) => setThemeConfig({ ...themeConfig, secondaryColor: e.target.value })}
                        className="w-16 h-10 p-1"
                      />
                      <Input
                        value={themeConfig.secondaryColor}
                        onChange={(e) => setThemeConfig({ ...themeConfig, secondaryColor: e.target.value })}
                        placeholder="#06B6D4"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="accentColor">Cor de Destaque</Label>
                    <div className="flex gap-2">
                      <Input
                        id="accentColor"
                        type="color"
                        value={themeConfig.accentColor}
                        onChange={(e) => setThemeConfig({ ...themeConfig, accentColor: e.target.value })}
                        className="w-16 h-10 p-1"
                      />
                      <Input
                        value={themeConfig.accentColor}
                        onChange={(e) => setThemeConfig({ ...themeConfig, accentColor: e.target.value })}
                        placeholder="#F59E0B"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Background */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Background do Hero</h3>
                <div>
                  <Label htmlFor="backgroundType">Tipo de Background</Label>
                  <Select 
                    value={themeConfig.backgroundType} 
                    onValueChange={(value: 'gradient' | 'solid' | 'image') => 
                      setThemeConfig({ ...themeConfig, backgroundType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gradient">Gradiente</SelectItem>
                      <SelectItem value="solid">Cor Sólida</SelectItem>
                      <SelectItem value="image">Imagem</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="heroBackground">
                    {themeConfig.backgroundType === 'image' ? 'URL da Imagem' : 'CSS Background'}
                  </Label>
                  <Input
                    id="heroBackground"
                    value={themeConfig.heroBackground}
                    onChange={(e) => setThemeConfig({ ...themeConfig, heroBackground: e.target.value })}
                    placeholder={
                      themeConfig.backgroundType === 'image' 
                        ? '/src/assets/hero-bg.jpg'
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }
                  />
                </div>
              </div>

              {/* Logo */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Logo</h3>
                <div>
                  <Label htmlFor="logoUrl">URL do Logo</Label>
                  <Input
                    id="logoUrl"
                    value={themeConfig.logoUrl}
                    onChange={(e) => setThemeConfig({ ...themeConfig, logoUrl: e.target.value })}
                    placeholder="/src/assets/logo.png"
                  />
                </div>
                
                {themeConfig.logoUrl && (
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                    <img 
                      src={themeConfig.logoUrl} 
                      alt="Logo preview"
                      className="h-12 object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Button onClick={handleSaveTheme}>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Tema
                </Button>
                <Button variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Restaurar Padrão
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomeManager;