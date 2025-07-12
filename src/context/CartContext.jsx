import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, itemType = 'product') => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id && cartItem.type === itemType);
            if (existingItem) {
                // Only increment quantity for products
                if (itemType === 'product') {
                    return prevItems.map((cartItem) =>
                        cartItem.id === item.id && cartItem.type === itemType
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    );
                } else {
                    // For courses and live lessons, don't increment quantity, just return existing items
                    return prevItems;
                }
            }
            return [...prevItems, { ...item, quantity: 1, type: itemType }];
        });
    };

    const removeFromCart = (id, type) => {
        setCartItems((prevItems) => prevItems.filter((item) => !(item.id === id && item.type === type)));
    };

    const updateQuantity = (id, type, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.type === type ? { ...item, quantity: Math.max(0, quantity) } : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity, calculateTotal }}
        >
            {children}
        </CartContext.Provider>
    );
};