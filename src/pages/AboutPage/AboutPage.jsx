import React from 'react';
import Header from '../../components/partials/Header/Header';
import './AboutPage.css'
import CeoWord from './CeoWord/CeoWord';
import Hiring from './Hiring/Hiring';

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <Header />
      <CeoWord />
      <Hiring />
    </div>
  );
};

export default AboutPage;