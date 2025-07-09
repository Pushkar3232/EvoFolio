// src/components/common/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">
              Evo<span className="text-blue-400">Folio</span>
            </h3>
            <p className="text-gray-400">
              Create stunning portfolios that showcase your talent
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 EvoFolio. Built with React, TypeScript, and Firebase.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};