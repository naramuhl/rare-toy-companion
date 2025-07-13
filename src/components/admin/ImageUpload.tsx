import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
  value?: string;
  onChange: (imageUrl: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  label = "Imagem",
  placeholder = "URL da imagem ou faça upload",
  className = ""
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Erro",
        description: "Por favor, selecione apenas arquivos de imagem.",
        variant: "destructive"
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "Erro",
        description: "A imagem deve ter no máximo 5MB.",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);

    try {
      // Create a unique filename
      const timestamp = Date.now();
      const randomId = Math.random().toString(36).substring(2, 15);
      const extension = file.name.split('.').pop();
      const fileName = `upload-${timestamp}-${randomId}.${extension}`;
      
      // For demo purposes, we'll use FileReader to convert to base64
      // In a real app, you'd upload to your server or cloud storage
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        
        // Store in localStorage as a simple demo solution
        const uploads = JSON.parse(localStorage.getItem('uploadedImages') || '{}');
        uploads[fileName] = base64;
        localStorage.setItem('uploadedImages', JSON.stringify(uploads));
        
        // Return the local reference
        onChange(`/lovable-uploads/${fileName}`);
        
        toast({
          title: "Sucesso",
          description: "Imagem carregada com sucesso!",
        });
      };
      
      reader.readAsDataURL(file);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao fazer upload da imagem.",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const clearImage = () => {
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label>{label}</Label>
      
      {/* URL Input */}
      <div className="flex gap-2">
        <Input
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1"
        />
        {value && (
          <Button 
            type="button"
            variant="outline" 
            size="sm"
            onClick={clearImage}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Upload Area */}
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-6 text-center transition-colors
          ${dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}
          ${uploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-primary/50'}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !uploading && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          disabled={uploading}
        />
        
        {uploading ? (
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-muted-foreground">Carregando...</p>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Clique ou arraste uma imagem aqui</p>
              <p className="text-xs text-muted-foreground">PNG, JPG, WEBP até 5MB</p>
            </div>
          </div>
        )}
      </div>

      {/* Image Preview */}
      {value && !uploading && (
        <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Preview:</p>
          <div className="relative inline-block">
            <img 
              src={value} 
              alt="Preview"
              className="h-20 w-20 object-cover rounded-md"
              onError={(e) => {
                // Check if it's a local upload reference
                if (value.startsWith('/lovable-uploads/')) {
                  const fileName = value.split('/').pop();
                  const uploads = JSON.parse(localStorage.getItem('uploadedImages') || '{}');
                  if (uploads[fileName!]) {
                    (e.target as HTMLImageElement).src = uploads[fileName!];
                  }
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;