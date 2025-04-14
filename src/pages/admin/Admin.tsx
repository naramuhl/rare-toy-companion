
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';

const Admin = () => {
  const checkAdminAuth = () => {
    // Aqui seria implementado a lógica real de verificação de autenticação
    // Por enquanto, sempre retorna true para desenvolvimento
    return true;
  };

  const isAuthenticated = checkAdminAuth();

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-muted/30">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Acesso Restrito</h1>
          <p className="text-center mb-4">
            Você precisa estar autenticado como administrador para acessar esta página.
          </p>
          <div className="flex justify-center">
            <a 
              href="/auth/login" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Fazer login
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default Admin;
