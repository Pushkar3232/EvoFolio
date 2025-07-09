// src/components/portfolio/SkillsSection.tsx
import React from 'react';

interface SkillsSectionProps {
  skills: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 relative">
              <span className="relative z-10 bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl scale-110 opacity-30"></div>
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed px-4">
            Technologies and tools I use to create amazing digital experiences
          </p>
        </div>
        
        {/* Enhanced skills grid - Centered and properly aligned */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.08}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative bg-white/90 backdrop-blur-sm text-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 font-semibold border border-gray-200/50 px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 text-center group-hover:scale-105 group-hover:bg-white group-hover:border-blue-200/70 transform hover:-translate-y-2 cursor-pointer min-w-[120px] sm:min-w-[140px] lg:min-w-[160px]">
                {/* Enhanced skill background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Skill text */}
                <span className="relative z-10 text-sm sm:text-base lg:text-lg font-semibold block leading-tight text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {skill}
                </span>
                
                {/* Enhanced hover effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-3/4 transition-all duration-500"></div>
                
                {/* Subtle pulse effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-all duration-300"></div>
              </div>
              
              {/* Enhanced floating glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center space-x-4 sm:space-x-8">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
        
        {/* Stats or additional info */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">
              {skills.length} Technologies Mastered
            </span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @media (max-width: 640px) {
          .group:hover .transform {
            transform: translateY(-4px) scale(1.02);
          }
        }
        
        @media (hover: none) {
          .group:hover .transform {
            transform: none;
          }
          .group:active .transform {
            transform: scale(0.98);
          }
        }
      `}</style>
    </section>
  );
};