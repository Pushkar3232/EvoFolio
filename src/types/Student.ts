// src/types/Student.ts
export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  bio?: string;
  skills: string[];
  projects: Project[];
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface StudentFormData {
  name: string;
  email: string;
  bio?: string;
  skills: string[];
  projects: Omit<Project, 'id'>[];
  linkedinUrl?: string;
  githubUrl?: string;
  profileImage?: string;
}