import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import LiveLessonsPage from './pages/LiveLessonsPage/LiveLessonsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import CartPage from './pages/CartPage/CartPage';
import CoursePage from './pages/CoursesPage/CoursePage/CoursePage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/live-lessons" element={<LiveLessonsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        {/* Add more routes here as needed */}        
      </Routes>
    </Router>
  );
}

export default App;