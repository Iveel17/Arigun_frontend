import React, { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
        { id: 2, name: 'Product 2', price: 39.99, quantity: 2 },
    ]);

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;