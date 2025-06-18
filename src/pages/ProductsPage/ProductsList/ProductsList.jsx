import React from 'react';
import './ProductsList.css'
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = ({ products }) => {
  return (
    <div className="products-grid">
      {products?.filter(product => product && product.id).map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;