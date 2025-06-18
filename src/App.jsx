import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import ClassesPage from './pages/ClassesPage/ClassesPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* Add more routes here as needed */}        
      </Routes>
    </Router>
  );
}

export default App;