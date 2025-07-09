// src/components/common/Footer.tsx
import React from 'react';
import { Heart, Code, Database } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          {/* Logo and Description */}
          <div className="mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Evo<span className="text-blue-400">Folio</span>
            </h3>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Create stunning portfolios that showcase your talent and make lasting impressions
            </p>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-gray-300 text-sm">Modern Design</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-gray-300 text-sm">Secure Storage</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-gray-300 text-sm">Made with Love</span>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 EvoFolio. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>using TypeScript & Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};