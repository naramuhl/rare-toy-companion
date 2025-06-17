
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DadosTab = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meus Dados</h2>
      <div className="border rounded-lg p-6 bg-card">
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="nome" className="block text-sm font-medium">
                Nome completo
              </label>
              <Input id="nome" defaultValue="João Silva" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" defaultValue="cliente@email.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="telefone" className="block text-sm font-medium">
                Telefone
              </label>
              <Input id="telefone" defaultValue="(11) 99999-9999" />
            </div>
            <div className="space-y-2">
              <label htmlFor="cpf" className="block text-sm font-medium">
                CPF
              </label>
              <Input id="cpf" defaultValue="123.456.789-00" />
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="text-lg font-medium mb-4">Alterar senha</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="senhaAtual" className="block text-sm font-medium">
                  Senha atual
                </label>
                <Input id="senhaAtual" type="password" />
              </div>
              <div className="space-y-2">
                <label htmlFor="novaSenha" className="block text-sm font-medium">
                  Nova senha
                </label>
                <Input id="novaSenha" type="password" />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirmarSenha" className="block text-sm font-medium">
                  Confirmar nova senha
                </label>
                <Input id="confirmarSenha" type="password" />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Salvar alterações</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DadosTab;
