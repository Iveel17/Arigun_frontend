import React from 'react';
import './CourseCard.css';

// Sample course data
const courses = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      instructor: "John Smith",
      price: 89,
      originalPrice: 159,
      rating: 4.8,
      students: 12534,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      category: "Programming",
      level: "Beginner",
      duration: "42 hours",
      bestseller: true
    },
    {
      id: 2,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      price: 129,
      originalPrice: 199,
      rating: 4.9,
      students: 8921,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      category: "Programming",
      level: "Advanced",
      duration: "38 hours",
      bestseller: false
    },
    {
      id: 3,
      title: "Digital Marketing Fundamentals",
      instructor: "Mike Davis",
      price: 69,
      originalPrice: 119,
      rating: 4.6,
      students: 15672,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Marketing",
      level: "Beginner",
      duration: "28 hours",
      bestseller: true
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      instructor: "Emma Wilson",
      price: 99,
      originalPrice: 149,
      rating: 4.7,
      students: 9834,
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      category: "Design",
      level: "Intermediate",
      duration: "35 hours",
      bestseller: false
    },
    {
      id: 5,
      title: "Python for Data Science",
      instructor: "Alex Chen",
      price: 109,
      originalPrice: 179,
      rating: 4.8,
      students: 11245,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
      category: "Data Science",
      level: "Intermediate",
      duration: "45 hours",
      bestseller: true
    },
    {
      id: 6,
      title: "SEO Optimization Mastery",
      instructor: "Lisa Rodriguez",
      price: 79,
      originalPrice: 129,
      rating: 4.5,
      students: 7892,
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop",
      category: "Marketing",
      level: "Advanced",
      duration: "32 hours",
      bestseller: false
    },
    {
      id: 7,
      title: "Mobile App Development",
      instructor: "David Park",
      price: 139,
      originalPrice: 209,
      rating: 4.9,
      students: 6543,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      category: "Programming",
      level: "Advanced",
      duration: "52 hours",
      bestseller: false
    },
    {
      id: 8,
      title: "Graphic Design Essentials",
      instructor: "Rachel Green",
      price: 59,
      originalPrice: 99,
      rating: 4.4,
      students: 13456,
      image: "https://images.unsplash.com/photo-1626785774625-0b16a7d1eb0c?w=400&h=300&fit=crop",
      category: "Design",
      level: "Beginner",
      duration: "25 hours",
      bestseller: true
    }
  ];

const CourseCard = () => {
    return (
        <div className="courses-grid">
            {courses.map(course => (
            <div key={course.id} className="course-card">
                {course.bestseller && (
                <div className="bestseller-badge">BESTSELLER</div>
                )}
                <div className="course-image">
                <img src={course.image} alt={course.title} />
                </div>
                <div className="course-info">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-instructor">{course.instructor}</p>
                    <div className="course-rating">
                        <span className="rating-number">{course.rating}</span>
                        <div className="stars">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={`star ${i < Math.floor(course.rating) ? 'filled' : ''}`}>
                            ★
                            </span>
                        ))}
                        </div>
                        <span className="students-count">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="course-meta">
                        <span className="duration">{course.duration}</span>
                        <span className="level">{course.level}</span>
                    </div>
                    <div className="course-price">
                        <span className="current-price">${course.price}</span>
                        <span className="original-price">${course.originalPrice}</span>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
  }
  
  export default CourseCard