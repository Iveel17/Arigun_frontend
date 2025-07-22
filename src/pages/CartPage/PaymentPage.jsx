import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Header from '../../components/partials/Header/Header';
import ButtonA from '../../components/buttons/ButtonA/ButtonA';
import ButtonB from '../../components/buttons/ButtonB/ButtonB';
import './PaymentPage.css';

const PaymentPage = () => {
    const { cartItems, calculateTotal, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        billingAddress: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleSubmitPayment = () => {
        // Placeholder payment processing
        alert('Payment processing... (This is a placeholder)');
        // In a real app, you'd process payment here
        clearCart();
        navigate('/payment-success');
    };

    const handleBackToCart = () => {
        navigate('/cart');
    };

    return (
        <div className="payment-container">
            <Header />
            <div className="payment-content">
                <div className="payment-header">
                    <ButtonA 
                        text="← Back to Cart" 
                        className="back-btn" 
                        onClick={handleBackToCart} 
                    />
                    <h1 className="payment-title">Checkout</h1>
                </div>

                <div className="payment-layout">
                    {/* Order Summary */}
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-items">
                            {cartItems.map((item) => (
                                <div key={`${item.id}-${item.type}`} className="summary-item">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="summary-item-image"
                                    />
                                    <div className="summary-item-details">
                                        <h4>{item.title}</h4>
                                        <p>Qty: {item.quantity}</p>
                                        <p className="summary-price">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="summary-total">
                            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="payment-form">
                        <h2>Payment Information</h2>
                        
                        {/* Payment Method Selection */}
                        <div className="payment-methods">
                            <h3>Payment Method</h3>
                            <div className="payment-method-options">
                                <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="paymentMethod" 
                                        value="card"
                                        checked={paymentMethod === 'card'}
                                        onChange={() => handlePaymentMethodChange('card')}
                                    />
                                    💳 Credit/Debit Card
                                </label>
                                <label className={`payment-option ${paymentMethod === 'paypal' ? 'selected' : ''}`}>
                                    <input 
                                        type="radio" 
                                        name="paymentMethod" 
                                        value="paypal"
                                        checked={paymentMethod === 'paypal'}
                                        onChange={() => handlePaymentMethodChange('paypal')}
                                    />
                                    📱 Mobile
                                </label>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="form-section">
                            <h3>Contact Information</h3>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-input"
                                required
                            />
                        </div>

                        {paymentMethod === 'card' && (
                            <div className="form-section">
                                <h3>Card Information</h3>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full name on card"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="1234 5678 9012 3456"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                                <div className="card-row">
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        placeholder="MM/YY"
                                        value={formData.expiryDate}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="cvv"
                                        placeholder="CVV"
                                        value={formData.cvv}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <div className="form-section">
                            <h3>Billing Address</h3>
                            <textarea
                                name="billingAddress"
                                placeholder="Enter your billing address"
                                value={formData.billingAddress}
                                onChange={handleInputChange}
                                className="form-textarea"
                                rows="3"
                                required
                            />
                        </div>

                        {/* Payment Button */}
                        <div className="payment-actions">
                            <ButtonB 
                                text={`Complete Payment - $${calculateTotal().toFixed(2)}`}
                                className="payment-btn"
                                onClick={handleSubmitPayment}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;