// src/components/portfolio/PortfolioHeader.tsx
import React from 'react';
import { Student } from '../../types/Student';

interface PortfolioHeaderProps {
  student: Student;
}

export const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({ student }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        {student.profileImage && (
          <img
            src={student.profileImage}
            alt={student.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
        )}
        <h1 className="text-5xl font-bold mb-4">{student.name}</h1>
        {student.bio && (
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {student.bio}
          </p>
        )}
        <div className="mt-8 flex justify-center space-x-4">
          {student.githubUrl && (
            <a
              href={student.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              GitHub
            </a>
          )}
          {student.linkedinUrl && (
            <a
              href={student.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </header>
  );
};





