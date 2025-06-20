import React, { useState, useEffect } from 'react';
import Header from '../../components/partials/Header/Header';
import ProductsList from './ProductsList/ProductsList';
import FilterModal from './FilterModal/FilterModal';
import './ProductsPage.css';

const ProductsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Move this to a separate file later if needed
  const products = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      price: 89,
      originalPrice: 159,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      bestseller: true
    },
    {
      id: 2,
      title: "Advanced React Development",
      price: 129,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      bestseller: false
    },
    {
      id: 3,
      title: "Digital Marketing Fundamentals",
      price: 69,
      originalPrice: 119,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      bestseller: true
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      price: 99,
      originalPrice: 149,
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      bestseller: false
    },
    {
      id: 5,
      title: "Python for Data Science",
      price: 109,
      originalPrice: 179,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
      bestseller: true
    },
    {
      id: 6,
      title: "SEO Optimization Mastery",
      price: 79,
      originalPrice: 129,
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop",
      bestseller: false
    },
    {
      id: 7,
      title: "Mobile App Development",
      price: 139,
      originalPrice: 209,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      bestseller: false
    },
    {
      id: 8,
      title: "Graphic Design Essentials",
      price: 59,
      originalPrice: 99,
      image: "https://images.unsplash.com/photo-1626785774625-0b16a7d1eb0c?w=400&h=300&fit=crop",
      bestseller: true
    }
  ];

  const categories = [
    { name: 'Book', count: 3 },
    { name: 'Card', count: 2 },
  ];

  const sortOptions = [
    { value: 'price-low', label: 'Price (Lowest First)' },
    { value: 'price-high', label: 'Price (Highest First)' },
    { value: 'newest', label: 'Newest' },
  ];

  // Your existing useEffect for filtering/sorting
  useEffect(() => {
    let filtered = [...products];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
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

    setFilteredProducts(filtered);
  }, [selectedCategories, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const getSortLabel = (value) => {
    return sortOptions.find(option => option.value === value)?.label || 'Newest';
  };

  return (
    <div className="products-page">
      <Header />
      <div className="products-header">
        <div className="container">
          <h1>ALL PRODUCTS</h1>
        </div>
      </div>

      <div className="products-main">
        <div className="container">
          <div className="products-controls">
            <div className="products-count">
              ALL PRODUCTS
            </div>
            <button 
              className="filter-button"
              onClick={() => setIsFilterOpen(true)}
            >
              FILTER / SORT +
            </button>
          </div>

          {/* Use the new ProductsList component */}
          <ProductsList products={filteredProducts} />
        </div>
      </div>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedCategories={selectedCategories}
        filteredProductsCount={filteredProducts.length}
        categories={categories}
        sortOptions={sortOptions}
        onCategoryChange={handleCategoryChange}
        getSortLabel={getSortLabel}
      />
    </div>
  );
};

export default ProductsPage;