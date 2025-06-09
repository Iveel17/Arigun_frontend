import React from 'react';
import Header from '../../components/partials/Header/Header';
import './HomePage.css';
import Hero from '../../components/partials/Hero/Hero';
import WhyUs from '../../components/partials/WhyUs/WhyUs';
import ContactUs from '../../components/partials/ContactUs/ContactUs';
import Product from '../../components/partials/Product/Product';
import ProductCTA from '../../components/partials/ProductCTA/ProductCTA';
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