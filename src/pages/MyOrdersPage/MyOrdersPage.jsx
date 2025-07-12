import React from 'react';
import Header from '../../components/partials/Header/Header';
import './MyOrdersPage.css';

const MyOrdersPage = () => {
    // Mock order data
    const orders = [
        {
            id: 1,
            date: '2024-01-15',
            total: 89.99,
            items: [
                { name: 'Blue T-Shirt', quantity: 2, price: 29.99 },
                { name: 'Black Jeans', quantity: 1, price: 30.01 }
            ],
            status: 'Delivered'
        },
        {
            id: 2,
            date: '2024-01-10',
            total: 45.50,
            items: [
                { name: 'Running Shoes', quantity: 1, price: 45.50 }
            ],
            status: 'Processing'
        }
    ];

    return (
        <div className="my-orders-container">
            <Header />
            <h1>My Orders</h1>
            <div className="orders-list">
                {orders.map((order) => (
                    <div key={order.id} className="order-card">
                        <div className="order-header">
                            <h3>Order #{order.id}</h3>
                            <span className="order-date">{order.date}</span>
                            <span className={`order-status ${order.status.toLowerCase()}`}>
                                {order.status}
                            </span>
                        </div>
                        <div className="order-items">
                            {order.items.map((item, index) => (
                                <div key={index} className="order-item">
                                    <span>{item.name}</span>
                                    <span>Qty: {item.quantity}</span>
                                    <span>${item.price.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="order-total">
                            <strong>Total: ${order.total.toFixed(2)}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrdersPage;