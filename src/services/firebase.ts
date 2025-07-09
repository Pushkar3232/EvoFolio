// src/services/firebase.ts
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Student, StudentFormData } from '../types/Student';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKkgZ1oqb0EGMzB2hf6okiIt_h12ueZMo",
  authDomain: "evofolio-8c021.firebaseapp.com",
  projectId: "evofolio-8c021",
  storageBucket: "evofolio-8c021.firebasestorage.app",
  messagingSenderId: "946766589547",
  appId: "1:946766589547:web:cb74186fb4d3fb41e68b2e",
  measurementId: "G-W949MN0J9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Collection reference
const STUDENTS_COLLECTION = 'students';

// Student service functions
export const studentService = {
  // Create a new student portfolio
  async createStudent(studentData: StudentFormData): Promise<string> {
    try {
      const now = Timestamp.now();
      const docRef = await addDoc(collection(db, STUDENTS_COLLECTION), {
        ...studentData,
        projects: studentData.projects.map(project => ({
          ...project,
          id: crypto.randomUUID()
        })),
        createdAt: now,
        updatedAt: now
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating student:', error);
      throw error;
    }
  },

  // Get all students
  async getAllStudents(): Promise<Student[]> {
    try {
      const q = query(collection(db, STUDENTS_COLLECTION), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
        updatedAt: doc.data().updatedAt.toDate()
      })) as Student[];
    } catch (error) {
      console.error('Error getting students:', error);
      throw error;
    }
  },

  // Get student by ID
  async getStudentById(id: string): Promise<Student | null> {
    try {
      const docRef = doc(db, STUDENTS_COLLECTION, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          createdAt: data.createdAt.toDate(),
          updatedAt: data.updatedAt.toDate()
        } as Student;
      }
      return null;
    } catch (error) {
      console.error('Error getting student:', error);
      throw error;
    }
  },

  // Update student
  async updateStudent(id: string, updates: Partial<StudentFormData>): Promise<void> {
    try {
      const docRef = doc(db, STUDENTS_COLLECTION, id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating student:', error);
      throw error;
    }
  },

  // Delete student
  async deleteStudent(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, STUDENTS_COLLECTION, id));
    } catch (error) {
      console.error('Error deleting student:', error);
      throw error;
    }
  },

  // Upload image to Firebase Storage
  async uploadImage(file: File, studentId: string): Promise<string> {
    try {
      const storageRef = ref(storage, `student-images/${studentId}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      return await getDownloadURL(snapshot.ref);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }
};