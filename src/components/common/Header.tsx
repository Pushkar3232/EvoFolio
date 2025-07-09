// src/components/common/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const isPortfolioPage = location.pathname.startsWith('/portfolio/');

  if (isPortfolioPage) {
    return null; // Don't show header on individual portfolio pages
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            Evo<span className="text-blue-600">Folio</span>
          </Link>
          
          <nav className="flex space-x-6">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/create"
              className={`font-medium transition-colors ${
                location.pathname === '/create' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Create Portfolio
            </Link>
            <Link
              to="/portfolios"
              className={`font-medium transition-colors ${
                location.pathname === '/portfolios' 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              All Portfolios
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};