import React, { useState, useEffect } from 'react';
import Header from '../../components/partials/Header/Header';
import CoursesList from './CoursesList/CoursesList';
import FilterModal from './FilterModal/FilterModal';
import CourseModal from './CourseModal/CourseModal';
import './CoursesPage.css';

const CoursesPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Discount season state
  const [showOriginalPrice, setShowOriginalPrice] = useState(true);
  const [showDiscountBadge, setShowDiscountBadge] = useState(true);

  // Function to enable discount season mode
  const enableDiscountSeason = () => {
    setShowOriginalPrice(true);
    setShowDiscountBadge(true);
  };

  // Function to disable discount season mode
  const disableDiscountSeason = () => {
    setShowOriginalPrice(false);
    setShowDiscountBadge(true); // Keep discount badges but hide original price
  };

  // Your existing courses data...
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
      bestseller: true,
      description: "Learn the essentials of digital marketing including SEO, social media, and content marketing strategies."
    },
    {
      id: 4,
      title: "Python Data Science",
      instructor: "Dr. Emily Chen",
      price: 149,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "Data Science",
      level: "Intermediate",
      duration: "55 hours",
      bestseller: false,
      description: "Comprehensive Python course covering data analysis, visualization, and machine learning fundamentals."
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      instructor: "Alex Rivera",
      price: 99,
      originalPrice: 169,
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      category: "Design",
      level: "Beginner",
      duration: "32 hours",
      bestseller: true,
      description: "Learn the fundamentals of user interface and user experience design with practical projects."
    },
    {
      id: 6,
      title: "Advanced CSS & Animations",
      instructor: "Jordan Kim",
      price: 79,
      originalPrice: 139,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      category: "Design",
      level: "Advanced",
      duration: "25 hours",
      bestseller: false,
      description: "Master advanced CSS techniques, animations, and modern layout methods for stunning web designs."
    },
    {
      id: 7,
      title: "Social Media Marketing",
      instructor: "Lisa Park",
      price: 59,
      originalPrice: 99,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      category: "Marketing",
      level: "Intermediate",
      duration: "22 hours",
      bestseller: false,
      description: "Develop effective social media strategies to grow your brand and engage with your audience."
    },
    {
      id: 8,
      title: "Node.js Backend Development",
      instructor: "Carlos Rodriguez",
      price: 119,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
      category: "Programming",
      level: "Advanced",
      duration: "48 hours",
      bestseller: true,
      description: "Build scalable backend applications with Node.js, Express, and database integration."
    }
  ];

  // Your existing categories, levels, sortOptions...
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
    { value: 'price-low', label: 'Price (Lowest First)' },
    { value: 'price-high', label: 'Price (Highest First)' },
    { value: 'newest', label: 'Newest' }
  ];

  // Course modal handlers
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setIsCourseModalOpen(true);
  };

  const handleCloseCourseModal = () => {
    setIsCourseModalOpen(false);
    setSelectedCourse(null);
  };

  // Your existing useEffect for filtering/sorting...
  useEffect(() => {
    let filtered = [...courses];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(course => 
        selectedCategories.includes(course.category)
      );
    }

    if (selectedLevels.length > 0) {
      filtered = filtered.filter(course => 
        selectedLevels.includes(course.level)
      );
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    setFilteredCourses(filtered);
  }, [selectedCategories, selectedLevels, sortBy]);

  // Your existing handler functions...
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
    return sortOptions.find(option => option.value === value)?.label || 'Newest';
  };

  return (
    <div className="courses-page">
      <Header />
      <div className="courses-header">
        <div className="container">
          <h1>ALL COURSES</h1>
        </div>
      </div>

      <div className="courses-main">
        <div className="container">
          <div className="courses-controls">
            <div className="courses-count">
              {filteredCourses.length} COURSES
            </div>
            
            <button 
              className="filter-button"
              onClick={() => setIsFilterOpen(true)}
            >
              FILTER / SORT +
            </button>
          </div>

          {/* Updated CoursesList with click handler */}
          <CoursesList 
            courses={filteredCourses} 
            onCourseClick={handleCourseClick}
          />
        </div>
      </div>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedCategories={selectedCategories}
        selectedLevels={selectedLevels}
        filteredCoursesCount={filteredCourses.length}
        categories={categories}
        levels={levels}
        sortOptions={sortOptions}
        onCategoryChange={handleCategoryChange}
        onLevelChange={handleLevelChange}
        getSortLabel={getSortLabel}
      />

      {/* Course Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={isCourseModalOpen}
        onClose={handleCloseCourseModal}
      />
    </div>
  );
};

export default CoursesPage;