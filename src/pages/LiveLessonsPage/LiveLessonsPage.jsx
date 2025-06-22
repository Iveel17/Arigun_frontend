import React, { useState, useEffect } from 'react';
import Header from '../../components/partials/Header/Header';
import LiveLessonsList from './LiveLessonsList/LiveLessonsList';
import FilterModal from './FilterModal/FilterModal';
import './LiveLessonsPage.css';

const LiveLessonsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('best-selling');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [filteredLiveLessons, setFilteredLiveLessons] = useState([]);

  // Move this to a separate file later if needed
  const live_lessons = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      instructor: "John Smith",
      price: 89,
      originalPrice: 159,
      students: 12,
      totalStudents: 27,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      bestseller: true
    },
    {
      id: 2,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      price: 129,
      originalPrice: 199,
      students: 21,
      totalStudents: 34,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      bestseller: false
    },
    {
      id: 3,
      title: "Digital Marketing Fundamentals",
      instructor: "Mike Davis",
      price: 69,
      originalPrice: 119,
      students: 15,
      totalStudents: 18,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
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

  // Your existing useEffect for filtering/sorting
  useEffect(() => {
    let filtered = [...live_lessons];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(live_lesson => 
        selectedCategories.includes(live_lesson.category)
      );
    }

    if (selectedLevels.length > 0) {
      filtered = filtered.filter(live_lesson => 
        selectedLevels.includes(live_lesson.level)
      );
    }

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

    setFilteredLiveLessons(filtered);
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
    <div className="live_lessons-page">
      <Header />
      <div className="live_lessons-header">
        <div className="container">
          <h1>ALL LIVE LESSONS</h1>
        </div>
      </div>

      <div className="live_lessons-main">
        <div className="container">
          <div className="live_lessons-controls">
            <div className="live_lessons-count">
              ALL LIVE LESSONS
            </div>
            <button 
              className="filter-button"
              onClick={() => setIsFilterOpen(true)}
            >
              FILTER / SORT +
            </button>
          </div>

          {/* Use the new LiveLessonsList component */}
          <LiveLessonsList live_lessons={filteredLiveLessons} />
        </div>
      </div>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedCategories={selectedCategories}
        selectedLevels={selectedLevels}
        filteredLiveLessonsCount={filteredLiveLessons.length}
        categories={categories}
        levels={levels}
        sortOptions={sortOptions}
        onCategoryChange={handleCategoryChange}
        onLevelChange={handleLevelChange}
        getSortLabel={getSortLabel}
      />
    </div>
  );
};

export default LiveLessonsPage;