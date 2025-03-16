
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <div className="relative">
          <span className="text-9xl font-bold text-primary/10">404</span>
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
            Page Not Found
          </h1>
        </div>
        
        <p className="mt-6 mb-8 text-lg text-muted-foreground max-w-md">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <Link to="/">
          <Button className="font-medium">
            <Home className="mr-2 h-4 w-4" /> Return Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
