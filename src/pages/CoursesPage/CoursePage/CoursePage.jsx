import React from 'react';
import { useParams } from 'react-router-dom';

// Temporary courses data (same as in CoursesPage.jsx)
const courses = [
  {
    id: 1,
    title: "Complete JavaScript Mastery",
    instructor: "John Smith",
    price: 89,
    originalPrice: 159,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    category: "Programming",
    level: "Beginner",
    duration: "42 hours",
    students: 12,
    totalStudents: 27,
    bestseller: true,
    description: "Master JavaScript from basics to advanced concepts with hands-on projects and real-world applications."
  },
  {
    id: 2,
    title: "Advanced React Development",
    instructor: "Sarah Johnson",
    price: 129,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    category: "Programming",
    level: "Advanced",
    duration: "38 hours",
    students: 10,
    totalStudents: 23,
    bestseller: false,
    description: "Take your React skills to the next level with advanced patterns, hooks, and performance optimization."
  },
  {
    id: 3,
    title: "Digital Marketing Fundamentals",
    instructor: "Mike Davis",
    price: 69,
    originalPrice: 119,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    category: "Marketing",
    level: "Beginner",
    duration: "28 hours",
    students: 122,
    totalStudents: 211,
    bestseller: true,
    description: "Learn the essentials of digital marketing including SEO, social media, and content marketing strategies."
  },
];

const CoursePage = ({ course }) => {
  const { id } = useParams(); // Get course ID from URL
  const selectedCourse = id ? courses.find(c => c.id === parseInt(id)) : course;

  return (
    <div>
      {selectedCourse ? (
        <div>
          <h2>Course ID: {selectedCourse.id}</h2>
          <h3>Course Title: {selectedCourse.title}</h3>
        </div>
      ) : (
        <h2>No course selected yet. Click a course to view details.</h2>
      )}
    </div>
  );
};

export default CoursePage;
