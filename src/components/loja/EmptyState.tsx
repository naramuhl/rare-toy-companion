
import React from 'react';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className="col-span-3 text-center py-12">
      <p className="text-lg text-muted-foreground">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;
