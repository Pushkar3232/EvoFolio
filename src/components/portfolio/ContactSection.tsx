// src/components/portfolio/ContactSection.tsx
import React from 'react';
import { Student } from '../../types/Student';

interface ContactSectionProps {
  student: Student;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ student }) => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href={`mailto:${student.email}`}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Email
          </a>
          {student.linkedinUrl && (
            <a
              href={student.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Connect on LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
};