import React, { useState } from 'react';
import './ProductCTA.css';

const ProductCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Placeholder logic - replace with actual API call
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim();

  if (isSubmitted) {
    return (
      <div className="product-cta-container">
        <div className="cta-content success-message">
          <div className="success-icon">✓</div>
          <h2 className="cta-title">Thank You!</h2>
          <p className="cta-description">
            We've received your information and will be in touch soon with our latest educational products and updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-cta-container">
      <div className="cta-content">
        <div className="cta-header">
          <h2 className="cta-title">Stay Updated</h2>
          <p className="cta-description">
            Get notified about our latest educational products, exclusive offers, and learning resources.
          </p>
        </div>

        <form className="cta-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your email address"
              required
            />
          </div>

          <button
            type="submit"
            className={`cta-button ${!isFormValid ? 'disabled' : ''}`}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? (
              <span className="loading-text">
                <span className="spinner"></span>
                Submitting...
              </span>
            ) : (
              'Get Updates'
            )}
          </button>
        </form>

        <p className="privacy-note">
          We respect your privacy. Your information will never be shared with third parties.
        </p>
      </div>
    </div>
  );
};

export default ProductCTA;