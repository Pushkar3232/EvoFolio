/ src/hooks/useStudent.ts
import { useState, useEffect } from 'react';
import { Student } from '../types/Student';
import { studentService } from '../services/firebase';

export const useStudent = (id: string | undefined) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudent = async () => {
    if (!id) {
      setError('Invalid student ID');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const studentData = await studentService.getStudentById(id);
      setStudent(studentData);
      if (!studentData) {
        setError('Student not found');
      }
    } catch (err) {
      setError('Failed to load student');
      console.error('Error fetching student:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [id]);

  const refetch = () => {
    fetchStudent();
  };

  return {
    student,
    loading,
    error,
    refetch
  };
};