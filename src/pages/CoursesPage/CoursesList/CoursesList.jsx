import React from 'react';
import './CoursesList.css'
import CourseCard from '../CourseCard/CourseCard';

const CoursesList = ({ courses }) => {
  return (
    <div className="courses-grid">
      {courses?.filter(course => course && course.id).map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;