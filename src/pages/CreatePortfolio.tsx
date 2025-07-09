// src/pages/CreatePortfolio.tsx
import React from 'react';
import { StudentForm } from '../components/forms/StudentForm';

export const CreatePortfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Create Your Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to create your personalized portfolio. 
            All fields marked with * are required.
          </p>
        </div>
        <StudentForm />
      </div>
    </div>
  );
};