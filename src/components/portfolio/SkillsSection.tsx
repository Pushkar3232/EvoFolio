// src/components/portfolio/SkillsSection.tsx
import React from 'react';

interface SkillsSectionProps {
  skills: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow font-semibold border border-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};