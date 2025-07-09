// src/components/portfolio/ProjectsSection.tsx
import React from 'react';
import { Project } from '../../types/Student';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 relative">
              <span className="relative z-10 bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Featured Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl scale-110 opacity-30"></div>
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed px-4">
            Discover my latest work showcasing innovation, creativity, and technical excellence
          </p>
        </div>
        
        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-200/50 overflow-hidden hover:scale-[1.02] hover:bg-white transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.15}s`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Enhanced project image */}
              <div className="relative overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-48 sm:h-52 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-48 sm:h-52 lg:h-56 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-purple-200/50 animate-pulse"></div>
                    <div className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-500">
                      {project.name.charAt(0)}
                    </div>
                  </div>
                )}
                
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Project status indicator */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                  View Project
                </div>
              </div>
              
              {/* Enhanced project content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 text-sm sm:text-base">
                  {project.description}
                </p>
                
                {/* Enhanced technologies */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {Array.isArray(project.technologies)
                    ? project.technologies.slice(0, 6).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium border border-blue-200/50 hover:border-blue-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))
                    : typeof project.technologies === 'string'
                      ? project.technologies.split(',').slice(0, 6).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium border border-blue-200/50 hover:border-blue-300 transition-colors"
                          >
                            {tech.trim()}
                          </span>
                        ))
                      : null}
                </div>

                {/* Enhanced action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 sm:px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 text-sm sm:text-base"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 text-sm sm:text-base"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </span>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Enhanced floating effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="mt-16 sm:mt-20 flex justify-center space-x-4 sm:space-x-8">
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
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 640px) {
          .line-clamp-3 {
            -webkit-line-clamp: 2;
          }
        }
      `}</style>
    </section>
  );
};