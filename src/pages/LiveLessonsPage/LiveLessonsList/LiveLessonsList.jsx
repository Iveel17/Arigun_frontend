import React from 'react';
import './LiveLessonsList.css'
import LiveLessonCard from '../LiveLessonCard/LiveLessonCard';

const LiveLessonsList = ({ live_lessons }) => {
  return (
    <div className="live_lessons-grid">
      {live_lessons?.filter(live_lesson => live_lesson && live_lesson.id).map(live_lesson => (
        <LiveLessonCard key={live_lesson.id} live_lesson={live_lesson} />
      ))}
    </div>
  );
};

export default LiveLessonsList;