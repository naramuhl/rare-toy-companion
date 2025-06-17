
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  Smartphone, 
  Zap, 
  Settings, 
  CheckCircle, 
  AlertCircle, 
  Link as LinkIcon,
  QrCode,
  MessageSquare,
  Users,
  BarChart3
} from 'lucide-react';

interface WhatsAppIntegrationProps {
  onConnectionChange?: (connected: boolean) => void;
}

const WhatsAppIntegration = ({ onConnectionChange }: WhatsAppIntegrationProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [autoReply, setAutoReply] = useState(true);
  const [messageTemplate, setMessageTemplate] = useState('Olá! Obrigado pelo interesse em nossos produtos. Como posso ajudá-lo hoje?');

  const handleConnect = async () => {
    setIsConnecting(true);
    
    // Simular conexão com WhatsApp Web API
    setTimeout(() => {
      setIsConnected(true);
      setIsConnecting(false);
      onConnectionChange?.(true);
      toast.success('WhatsApp conectado com sucesso!');
    }, 2000);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    onConnectionChange?.(false);
    toast.success('WhatsApp desconectado');
  };

  const handleWebhookTest = async () => {
    if (!webhookUrl) {
      toast.error('Por favor, insira a URL do webhook');
      return;
    }

    toast.success('Webhook testado com sucesso!');
  };

  return (
    <div className="space-y-6">
      {/* Status da Conexão */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            Status da Conexão WhatsApp
          </CardTitle>
          <CardDescription>
            Gerencie a conexão com sua conta do WhatsApp Business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isConnected ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium">Conectado</p>
                    <p className="text-sm text-muted-foreground">WhatsApp Business ativo</p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-medium">Desconectado</p>
                    <p className="text-sm text-muted-foreground">Configure sua conexão</p>
                  </div>
                </>
              )}
            </div>
            
            {isConnected ? (
              <Button variant="outline" onClick={handleDisconnect}>
                Desconectar
              </Button>
            ) : (
              <Button onClick={handleConnect} disabled={isConnecting}>
                {isConnecting ? 'Conectando...' : 'Conectar'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Configurações de Integração */}
      <Tabs defaultValue="webhook" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="webhook">Webhook</TabsTrigger>
          <TabsTrigger value="automation">Automação</TabsTrigger>
          <TabsTrigger value="qr">QR Code</TabsTrigger>
        </TabsList>

        <TabsContent value="webhook" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Configuração do Webhook
              </CardTitle>
              <CardDescription>
                Configure webhooks para receber mensagens automaticamente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-url">URL do Webhook</Label>
                <Input
                  id="webhook-url"
                  placeholder="https://seu-webhook.com/whatsapp"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="api-key">Chave da API</Label>
                <Input
                  id="api-key"
                  type="password"
                  placeholder="Sua chave secreta da API"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleWebhookTest} variant="outline">
                  Testar Webhook
                </Button>
                <Button>
                  Salvar Configurações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Automação de Mensagens
              </CardTitle>
              <CardDescription>
                Configure respostas automáticas e templates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Resposta Automática</Label>
                  <p className="text-sm text-muted-foreground">
                    Enviar mensagem automática para novos contatos
                  </p>
                </div>
                <Switch
                  checked={autoReply}
                  onCheckedChange={setAutoReply}
                />
              </div>

              {autoReply && (
                <div className="space-y-2">
                  <Label htmlFor="message-template">Template da Mensagem</Label>
                  <textarea
                    id="message-template"
                    className="w-full p-3 border rounded-md resize-none"
                    rows={4}
                    value={messageTemplate}
                    onChange={(e) => setMessageTemplate(e.target.value)}
                    placeholder="Digite sua mensagem automática..."
                  />
                </div>
              )}

              <div className="space-y-3">
                <Label>Comandos Automáticos</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">!catalogo</p>
                      <p className="text-sm text-muted-foreground">Envia catálogo de produtos</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">!pedido</p>
                      <p className="text-sm text-muted-foreground">Inicia processo de pedido</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">!contato</p>
                      <p className="text-sm text-muted-foreground">Envia informações de contato</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qr" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5" />
                Links e QR Codes
              </CardTitle>
              <CardDescription>
                Gere links e QR codes para facilitar o acesso aos grupos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-4">
                <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mx-auto">
                  <QrCode className="h-24 w-24 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  QR Code para acesso rápido aos grupos de vendas
                </p>
                <div className="flex gap-2 justify-center">
                  <Button variant="outline">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Gerar Link
                  </Button>
                  <Button>
                    Baixar QR Code
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Links Personalizados</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">Grupo Premium</p>
                      <p className="text-sm text-muted-foreground">wa.me/exemplo-premium</p>
                    </div>
                    <Button size="sm" variant="outline">Copiar</Button>
                  </div>
                  <div className="flex items-center gap-2 p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">Grupo Promoções</p>
                      <p className="text-sm text-muted-foreground">wa.me/exemplo-promocoes</p>
                    </div>
                    <Button size="sm" variant="outline">Copiar</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Estatísticas Rápidas */}
      {isConnected && (
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Contatos Ativos</p>
                  <p className="text-2xl font-bold">284</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Mensagens Hoje</p>
                  <p className="text-2xl font-bold">142</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Taxa de Resposta</p>
                  <p className="text-2xl font-bold">87%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WhatsAppIntegration;
