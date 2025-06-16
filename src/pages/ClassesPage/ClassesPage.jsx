import React from 'react';
import './ClassesPage.css';

const ClassesPage = () => {
    return (
        <div className="classes-container">
            <h1>Our Classes</h1>
            <div className="classes-grid">
                <div className="class-card">
                    <h2>Beginner Class</h2>
                    <p>Perfect for those just starting their fitness journey</p>
                    <span className="time">60 minutes</span>
                </div>
                <div className="class-card">
                    <h2>Intermediate Class</h2>
                    <p>For those with some experience looking to improve</p>
                    <span className="time">75 minutes</span>
                </div>
                <div className="class-card">
                    <h2>Advanced Class</h2>
                    <p>Challenging workouts for experienced members</p>
                    <span className="time">90 minutes</span>
                </div>
            </div>
        </div>
    );
};

export default ClassesPage;