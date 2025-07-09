// src/components/portfolio/PortfolioHeader.tsx
import React from 'react';
import { Student } from '../../types/Student';

interface PortfolioHeaderProps {
  student: Student;
}

export const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({ student }) => {
  return (
    <header className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Profile Image */}
          {student.profileImage && (
            <div className="relative inline-block group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-transparent blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              <img
                src={student.profileImage}
                alt={student.name}
                className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto border-4 border-white/50 shadow-2xl object-cover transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-3xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/30 group-hover:from-transparent group-hover:via-white/20 group-hover:to-white/40 transition-all duration-500"></div>
            </div>
          )}
          
          {/* Name with enhanced typography */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent hover:from-white hover:via-yellow-200 hover:to-white transition-all duration-500">
                {student.name}
              </span>
            </h1>
            
            {/* Enhanced bio section */}
            {student.bio && (
              <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light px-4 sm:px-6">
                  {student.bio}
                </p>
              </div>
            )}
          </div>
          
          {/* Enhanced social links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-8 px-4">
            {student.githubUrl && (
              <a
                href={student.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="relative z-10">GitHub</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            )}
            {student.linkedinUrl && (
              <a
                href={student.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="relative z-10">LinkedIn</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            )}
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};