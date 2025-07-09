// src/pages/CreatePortfolio.tsx
import React from 'react';
import { StudentForm } from '../components/forms/StudentForm';

export const CreatePortfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-6">
        
        <StudentForm />
      </div>
    </div>
  );
};