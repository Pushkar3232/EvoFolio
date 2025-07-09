// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Evo<span className="text-blue-600">Folio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create stunning, dynamic portfolios that showcase your skills, projects, and achievements. 
            Perfect for students and professionals looking to make an impact.
          </p>
          
          <div className="flex justify-center space-x-6 mb-16">
            <Link
              to="/create"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Create Portfolio
            </Link>
            <Link
              to="/portfolios"
              className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-600 transition-colors"
            >
              View Portfolios
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Easy to Use</h3>
              <p className="text-gray-600">
                Simple form-based interface to create professional portfolios in minutes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Dynamic Content</h3>
              <p className="text-gray-600">
                Automatically generated layouts that adapt to your content and showcase your work.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Share Anywhere</h3>
              <p className="text-gray-600">
                Get a unique URL for your portfolio that you can share with employers and clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};