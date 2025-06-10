import React from 'react';
import Header from '../../components/partials/Header/Header';
import './AboutPage.css'
import CeoWord from './CeoWord/CeoWord';

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Header />
      <CeoWord  />
    </div>
  );
};

export default AboutPage;