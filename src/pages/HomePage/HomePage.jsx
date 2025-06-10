import React from 'react';
import Header from '../../components/partials/Header/Header';
import './HomePage.css';
import Hero from './Hero/Hero';
import WhyUs from './WhyUs/WhyUs';
import ContactUs from './ContactUs/ContactUs';
import Product from './Product/Product';
import ProductCTA from './ProductCTA/ProductCTA';
import Footer from '../../components/partials/Footer/Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <WhyUs />
      <ContactUs />
      <Product />
      <ProductCTA />
      <Footer />
    </div>
  );
};

export default HomePage;