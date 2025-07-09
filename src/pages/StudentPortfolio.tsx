// src/pages/StudentPortfolio.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Student } from '../types/Student';
import { studentService } from '../services/firebase';
import { PortfolioHeader } from '../components/portfolio/PortfolioHeader';
import { SkillsSection } from '../components/portfolio/SkillsSection';
import { ProjectsSection } from '../components/portfolio/ProjectsSection';
import { ContactSection } from '../components/portfolio/ContactSection';

export const StudentPortfolio: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudent = async () => {
      if (!id) {
        setError('Invalid portfolio ID');
        setLoading(false);
        return;
      }

      try {
        const studentData = await studentService.getStudentById(id);
        if (studentData) {
          setStudent(studentData);
        } else {
          setError('Portfolio not found');
        }
      } catch (err) {
        setError('Failed to load portfolio');
        console.error('Error fetching student:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-indigo-200 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-t-indigo-600 rounded-full animate-spin"></div>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">Loading Portfolio</h3>
            <p className="text-gray-600">Preparing something amazing...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {error || 'Portfolio Not Found'}
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The portfolio you're looking for doesn't exist or has been removed. 
              Don't worry, there are many other amazing portfolios to explore!
            </p>
          </div>
          <Link
            to="/portfolios"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Browse All Portfolios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PortfolioHeader student={student} />
      <SkillsSection skills={student.skills} />
      <ProjectsSection projects={student.projects} />
      <ContactSection student={student} />
    </div>
  );
};