
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload } from 'lucide-react';

// Definir o schema de validação com zod
const produtoSchema = z.object({
  nome: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
  descricao: z.string().min(10, { message: 'A descrição deve ter pelo menos 10 caracteres' }),
  preco: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'O preço deve ser um número maior que zero',
  }),
  estoque: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: 'O estoque deve ser um número maior ou igual a zero',
  }),
  categoria: z.string().min(1, { message: 'Selecione uma categoria' }),
  idadeRecomendada: z.string().min(1, { message: 'Selecione uma faixa etária' }),
});

// Opções de categorias
const categorias = [
  { value: 'bonecos', label: 'Bonecos de Ação' },
  { value: 'educativos', label: 'Brinquedos Educativos' },
  { value: 'pelucias', label: 'Pelúcias' },
  { value: 'carros', label: 'Carrinhos' },
  { value: 'jogos', label: 'Jogos de Tabuleiro' },
  { value: 'quebra-cabecas', label: 'Quebra-Cabeças' },
];

// Opções de faixa etária
const faixasEtarias = [
  { value: '0-2', label: '0 a 2 anos' },
  { value: '3-5', label: '3 a 5 anos' },
  { value: '6-8', label: '6 a 8 anos' },
  { value: '9-11', label: '9 a 11 anos' },
  { value: '12+', label: '12 anos ou mais' },
];

interface AdicionarProdutoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdicionarProdutoDialog = ({ open, onOpenChange }: AdicionarProdutoDialogProps) => {
  const { toast } = useToast();

  // Inicializar o formulário com react-hook-form e zod
  const form = useForm<z.infer<typeof produtoSchema>>({
    resolver: zodResolver(produtoSchema),
    defaultValues: {
      nome: '',
      descricao: '',
      preco: '',
      estoque: '',
      categoria: '',
      idadeRecomendada: '',
    },
  });

  // Função de envio do formulário
  function onSubmit(values: z.infer<typeof produtoSchema>) {
    // Converter valores numéricos
    const produtoData = {
      ...values,
      preco: Number(values.preco),
      estoque: Number(values.estoque),
    };
    
    console.log(produtoData);
    
    toast({
      title: 'Produto adicionado com sucesso!',
      description: 'O produto foi cadastrado no sistema.',
    });
    
    // Fechar o diálogo e resetar o formulário
    form.reset();
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Produto</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome do produto */}
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Produto</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite o nome do produto" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Categoria */}
              <FormField
                control={form.control}
                name="categoria"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categorias.map((categoria) => (
                          <SelectItem 
                            key={categoria.value} 
                            value={categoria.value}
                          >
                            {categoria.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Preço */}
              <FormField
                control={form.control}
                name="preco"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço (R$)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="0,00" 
                        {...field} 
                        type="number" 
                        step="0.01" 
                        min="0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Estoque */}
              <FormField
                control={form.control}
                name="estoque"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estoque</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Quantidade em estoque" 
                        {...field} 
                        type="number" 
                        min="0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Idade Recomendada */}
              <FormField
                control={form.control}
                name="idadeRecomendada"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idade Recomendada</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a faixa etária" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {faixasEtarias.map((faixa) => (
                          <SelectItem 
                            key={faixa.value} 
                            value={faixa.value}
                          >
                            {faixa.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Imagem do produto (Sem funcionalidade real ainda) */}
              <div className="col-span-1 md:col-span-2">
                <Label>Imagem do Produto</Label>
                <div className="mt-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full h-32 flex flex-col gap-2 items-center justify-center border-dashed"
                  >
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Clique para fazer upload ou arraste a imagem aqui
                    </span>
                  </Button>
                  <FormDescription className="mt-1 text-xs">
                    Formatos suportados: JPG, PNG. Tamanho máximo: 5MB.
                  </FormDescription>
                </div>
              </div>
              
              {/* Descrição */}
              <FormField
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Descreva o produto com detalhes..." 
                        className="resize-none h-24" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end gap-3">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">Salvar Produto</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AdicionarProdutoDialog;
