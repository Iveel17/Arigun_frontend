import React, { useState, useEffect } from 'react';
import Header from '../../components/partials/Header/Header';
import './CoursesPage.css';

const CoursesPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('best-selling');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

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

  const categories = [
    { name: 'Programming', count: 3 },
    { name: 'Marketing', count: 2 },
    { name: 'Design', count: 2 },
    { name: 'Data Science', count: 1 }
  ];

  const levels = [
    { name: 'Beginner', count: 3 },
    { name: 'Intermediate', count: 2 },
    { name: 'Advanced', count: 3 }
  ];

  const sortOptions = [
    { value: 'best-selling', label: 'Best Selling' },
    { value: 'price-low', label: 'Price (Lowest First)' },
    { value: 'price-high', label: 'Price (Highest First)' },
    { value: 'newest', label: 'Newest' },
    { value: 'highest-rated', label: 'Highest Rated' }
  ];

  // Filter and sort courses
  useEffect(() => {
    let filtered = [...courses];

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(course => 
        selectedCategories.includes(course.category)
      );
    }

    // Apply level filter
    if (selectedLevels.length > 0) {
      filtered = filtered.filter(course => 
        selectedLevels.includes(course.level)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'highest-rated':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'best-selling':
      default:
        filtered.sort((a, b) => b.students - a.students);
        break;
    }

    setFilteredCourses(filtered);
  }, [selectedCategories, selectedLevels, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleLevelChange = (level) => {
    setSelectedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const getSortLabel = (value) => {
    return sortOptions.find(option => option.value === value)?.label || 'Best Selling';
  };

  return (
    <div className="courses-page">
      <Header />
      <div className="courses-header">
        <div className="container">
          <h1>ALL COURSES</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="courses-main">
        <div className="container">
          <div className="courses-controls">
            <div className="courses-count">
              ALL COURSES
            </div>
            <button 
              className="filter-button"
              onClick={() => setIsFilterOpen(true)}
            >
              FILTER / SORT +
            </button>
          </div>

          {/* Courses Grid */}
          <div className="courses-grid">
            {filteredCourses.map(course => (
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
        </div>
      </div>

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="filter-overlay">
          <div className="filter-modal">
            <div className="filter-header">
              <h2>FILTERS</h2>
              <button 
                className="close-button"
                onClick={() => setIsFilterOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="filter-content">
              {/* Sort By */}
              <div className="filter-section">
                <h3 className="filter-title">SORT BY: {getSortLabel(sortBy).toUpperCase()}</h3>
                <div className="filter-options">
                  {sortOptions.map(option => (
                    <label key={option.value} className="filter-option">
                      <input
                        type="radio"
                        name="sort"
                        value={option.value}
                        checked={sortBy === option.value}
                        onChange={(e) => setSortBy(e.target.value)}
                      />
                      <span className="checkmark"></span>
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="filter-section">
                <h3 className="filter-title">CATEGORY</h3>
                <div className="filter-options">
                  {categories.map(category => (
                    <label key={category.name} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => handleCategoryChange(category.name)}
                      />
                      <span className="checkmark"></span>
                      {category.name} ({category.count})
                    </label>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div className="filter-section">
                <h3 className="filter-title">LEVEL</h3>
                <div className="filter-options">
                  {levels.map(level => (
                    <label key={level.name} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedLevels.includes(level.name)}
                        onChange={() => handleLevelChange(level.name)}
                      />
                      <span className="checkmark"></span>
                      {level.name} ({level.count})
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="filter-footer">
              <button 
                className="apply-filters-button"
                onClick={() => setIsFilterOpen(false)}
              >
                VIEW {filteredCourses.length} COURSES
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;