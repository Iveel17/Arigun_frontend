import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Header from '../../components/partials/Header/Header';
import ButtonA from '../../components/buttons/ButtonA/ButtonA';
import ButtonB from '../../components/buttons/ButtonB/ButtonB';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart, calculateTotal } = useContext(CartContext);

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id);
        } else {
            updateQuantity(id, newQuantity);
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
                            <div key={item.id} className="cart-item">
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
                                                <p className="item-price">${item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="quantity-controls">
                                    <button 
                                        className="quantity-btn"
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        aria-label="Decrease quantity"
                                    >
                                        -
                                    </button>
                                    <span className="quantity-display">{item.quantity}</span>
                                    <button 
                                        className="quantity-btn"
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                                <ButtonA text="Remove" className="remove-btn" onClick={() => removeFromCart(item.id)} />
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
                        <ButtonB text="Proceed to Checkout" className="checkout-btn" onClick={() => alert('Checkout functionality not implemented yet')} />
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;