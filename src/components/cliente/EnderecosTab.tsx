
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const EnderecosTab = () => {
  const enderecos = [
    {
      id: '1',
      nome: 'Casa',
      logradouro: 'Rua das Flores',
      numero: '123',
      bairro: 'Jardim Primavera',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567',
      padrao: true
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meus Endereços</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {enderecos.map(endereco => (
          <div key={endereco.id} className="border rounded-lg p-4 bg-card hover:border-primary transition-colors">
            <div className="flex justify-between">
              <h3 className="font-medium">{endereco.nome}</h3>
              {endereco.padrao && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                  Padrão
                </span>
              )}
            </div>
            <p className="text-sm mt-1">
              {endereco.logradouro}, {endereco.numero} - {endereco.bairro}
            </p>
            <p className="text-sm text-muted-foreground">
              {endereco.cidade} - {endereco.estado}, {endereco.cep}
            </p>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline">Editar</Button>
              <Button size="sm" variant="outline" className="text-destructive">Remover</Button>
            </div>
          </div>
        ))}

        <div className="border border-dashed rounded-lg p-4 flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
          <div className="text-center">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mx-auto">
              <MapPin className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="mt-2 font-medium">Adicionar novo endereço</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnderecosTab;
