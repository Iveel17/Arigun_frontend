import React from 'react';
import Header from '../../components/partials/Header/Header';
import './ProductsPage.css';

const ProductsPage = () => {
    // Dummy products data for now
    const products = [
        { id: 1, name: 'Product 1', price: 29.99, description: 'Description for product 1' },
        { id: 2, name: 'Product 2', price: 39.99, description: 'Description for product 2' },
        { id: 3, name: 'Product 3', price: 49.99, description: 'Description for product 3' },
    ];

    return (
        <div className="products-container">
            <Header />
            <h1>Our Products</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="price">${product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;