import React from 'react';
import Header from '../../components/partials/Header/Header';
import './MyGoodsPage.css';

const MyGoodsPage = () => {
    // Boilerplate data for goods
    const myGoods = [
        {
            id: 1,
            goodsName: 'Blue T-Shirt',
            price: 29.99,
            status: 'Delivered',
            purchaseDate: '2023-08-01'
        },
        {
            id: 2,
            goodsName: 'Running Shoes',
            price: 89.99,
            status: 'In Transit',
            purchaseDate: '2023-08-05'
        },
        {
            id: 3,
            goodsName: 'Backpack',
            price: 49.99,
            status: 'Processing',
            purchaseDate: '2023-08-10'
        }
    ];

    return (
        <div className="my-goods-container">
            <Header />
            <h1>My Goods</h1>
            <div className="goods-list">
                {myGoods.map(goods => (
                    <div key={goods.id} className="goods-card">
                        <h3>{goods.goodsName}</h3>
                        <div className="goods-details">
                            <p>Price: ${goods.price}</p>
                            <p>Purchase Date: {goods.purchaseDate}</p>
                            <p className={`status ${goods.status.toLowerCase()}`}>
                                Status: {goods.status}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyGoodsPage;