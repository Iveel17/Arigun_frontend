import React from 'react';
import LiveLessonCard from '../LiveLessonCard/LiveLessonCard';
import './LiveLessonsList.css';

const LiveLessonsList = ({ live_lessons, onLiveLessonClick }) => {
  return (
    <div className="live_lessons-list">
      <div className="live_lessons-grid">
        {live_lessons.map(live_lesson => (
          <LiveLessonCard 
            key={live_lesson.id} 
            live_lesson={live_lesson} 
            onLiveLessonClick={onLiveLessonClick}
          />
        ))}
      </div>
      
      {live_lessons.length === 0 && (
        <div className="no-live_lessons">
          <h3>No live_lessons found</h3>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  );
};

export default LiveLessonsList;