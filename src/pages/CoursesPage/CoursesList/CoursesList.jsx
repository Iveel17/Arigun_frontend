import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './CoursesList.css';

const CoursesList = ({ courses, onCourseClick }) => {
  return (
    <div className="courses-list">
      <div className="courses-grid">
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            course={course} 
            onCourseClick={onCourseClick}
          />
        ))}
      </div>
      
      {courses.length === 0 && (
        <div className="no-courses">
          <h3>No courses found</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  );
};

export default CoursesList;