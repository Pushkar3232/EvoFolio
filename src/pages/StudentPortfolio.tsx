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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error || !student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {error || 'Portfolio Not Found'}
          </h1>
          <p className="text-gray-600 mb-6">
            The portfolio you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/portfolios"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
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