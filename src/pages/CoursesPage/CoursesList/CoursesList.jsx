import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './CoursesList.css';

const CoursesList = ({ courses }) => {
  return (
    <div className="courses-grid">
      {courses.map(course => (
        <CourseCard 
          key={course.id} 
          course={course}
        />
      ))}
    </div>
  );
};

export default CoursesList;