import React, { useState, useEffect } from 'react';
import Header from '../../components/partials/Header/Header';
import LiveLessonsList from './LiveLessonsList/LiveLessonsList';
import FilterModal from './FilterModal/FilterModal';
import LiveLessonModal from './LiveLessonModal/LiveLessonModal';
import './LiveLessonsPage.css';

const LiveLessonsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLiveLessonModalOpen, setIsLiveLessonModalOpen] = useState(false);
  const [selectedLiveLesson, setSelectedLiveLesson] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [filteredLiveLessons, setFilteredLiveLessons] = useState([]);

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

  // Your existing live_lessons data...
  const live_lessons = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      instructor: "John Smith",
      price: 89,
      originalPrice: 159,
      days: "Monday, Wednesday, Friday",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      category: "Programming",
      level: "Beginner",
      students: 12,
      totalStudents: 27,
      bestseller: true,
      description: "Master JavaScript from basics to advanced concepts with hands-on projects and real-world applications."
    },
    {
      id: 2,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      price: 129,
      originalPrice: 199,
      days: "Monday, Wednesday, Friday",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      category: "Programming",
      level: "Advanced",
      students: 10,
      totalStudents: 23,
      bestseller: false,
      description: "Take your React skills to the next level with advanced patterns, hooks, and performance optimization."
    },
    {
      id: 3,
      title: "Digital Marketing Fundamentals",
      instructor: "Mike Davis",
      price: 69,
      originalPrice: 119,
      days: "Monday, Wednesday, Friday",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Marketing",
      level: "Beginner",
      students: 122,
      totalStudents: 211,
      bestseller: true,
      description: "Learn the essentials of digital marketing including SEO, social media, and content marketing strategies."
    },
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
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' }
  ];

  // LiveLesson modal handlers
  const handleLiveLessonClick = (live_lesson) => {
    setSelectedLiveLesson(live_lesson);
    setIsLiveLessonModalOpen(true);
  };

  const handleCloseLiveLessonModal = () => {
    setIsLiveLessonModalOpen(false);
    setSelectedLiveLesson(null);
  };

  // Your existing useEffect for filtering/sorting...
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
      case 'oldest':
        filtered.sort((a, b) => a.id - b.id);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    setFilteredLiveLessons(filtered);
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
              {filteredLiveLessons.length} LIVE LESSONS
            </div>
            
            <button 
              className="filter-button"
              onClick={() => setIsFilterOpen(true)}
            >
              FILTER / SORT +
            </button>
          </div>

          {/* Updated LiveLessonsList with click handler */}
          <LiveLessonsList 
            live_lessons={filteredLiveLessons} 
            onLiveLessonClick={handleLiveLessonClick}
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
        filteredLiveLessonsCount={filteredLiveLessons.length}
        categories={categories}
        levels={levels}
        sortOptions={sortOptions}
        onCategoryChange={handleCategoryChange}
        onLevelChange={handleLevelChange}
        getSortLabel={getSortLabel}
      />

      {/* LiveLesson Modal */}
      <LiveLessonModal
        live_lesson={selectedLiveLesson}
        isOpen={isLiveLessonModalOpen}
        onClose={handleCloseLiveLessonModal}
      />
    </div>
  );
};

export default LiveLessonsPage;