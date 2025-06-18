import React from 'react';
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="products-grid">
      {products?.filter(product => product && product.id).map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;