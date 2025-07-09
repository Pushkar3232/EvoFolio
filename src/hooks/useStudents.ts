// src/hooks/useStudents.ts
import { useState, useEffect } from 'react';
import { Student } from '../types/Student';
import { studentService } from '../services/firebase';

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const studentsData = await studentService.getAllStudents();
      setStudents(studentsData);
    } catch (err) {
      setError('Failed to load students');
      console.error('Error fetching students:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const refetch = () => {
    fetchStudents();
  };

  return {
    students,
    loading,
    error,
    refetch
  };
};