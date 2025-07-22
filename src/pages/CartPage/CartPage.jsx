import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Header from '../../components/partials/Header/Header';
import ButtonA from '../../components/buttons/ButtonA/ButtonA';
import ButtonB from '../../components/buttons/ButtonB/ButtonB';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart, calculateTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const handleQuantityChange = (id, type, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id, type);
        } else {
            updateQuantity(id, type, newQuantity);
        }
    };

    const handleCheckout = () => {
        navigate('/cart/payment');
    };

    const getItemTypeDisplay = (type) => {
        switch (type) {
            case 'course':
                return '📚 Course';
            case 'live-lesson':
                return '🎥 Live Lesson';
            case 'product':
                return '🛍️ Product';
            default:
                return '📦 Item';
        }
    };

    return (
        <div className="cart-container">
            <Header />
            <h1 className="cart-title">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={`${item.id}-${item.type}`} className="cart-item">
                                <div className="item-details">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="cart-item-image"
                                    />
                                    <div className="item-info">
                                        <div className="item-header">
                                            <div className="title-price-group">
                                                <h3>#{item.id} {item.title}</h3>
                                                <p className="item-type">{getItemTypeDisplay(item.type)}</p>
                                                <p className="item-price">${item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Only show quantity controls for products */}
                                {item.type === 'product' ? (
                                    <div className="quantity-controls">
                                        <button 
                                            className="quantity-btn"
                                            onClick={() => handleQuantityChange(item.id, item.type, item.quantity - 1)}
                                            aria-label="Decrease quantity"
                                        >
                                            -
                                        </button>
                                        <span className="quantity-display">{item.quantity}</span>
                                        <button 
                                            className="quantity-btn"
                                            onClick={() => handleQuantityChange(item.id, item.type, item.quantity + 1)}
                                            aria-label="Increase quantity"
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <div className="quantity-controls">
                                        <span className="quantity-display-fixed">Quantity: {item.quantity}</span>
                                    </div>
                                )}
                                
                                <ButtonA 
                                    text="Remove" 
                                    className="remove-btn" 
                                    onClick={() => removeFromCart(item.id, item.type)} 
                                />
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
                        <ButtonB 
                            text="Proceed to Checkout" 
                            className="checkout-btn" 
                            onClick={handleCheckout} 
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;