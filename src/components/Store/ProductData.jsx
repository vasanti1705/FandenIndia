import React from 'react';
import Purchase from './Amazon';
import './ProductData.css';

const ProductData = () => {
  return (
    <div>
      <h1>Product Catalog</h1>
      <div className="product-list">
        <Purchase
          imageUrl="https://5.imimg.com/data5/ANDROID/Default/2022/10/TV/VE/MK/159598589/product-jpeg-500x500.jpg"
          productName="Product 1"
          productDescription="This is Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <Purchase
          imageUrl="https://example.com/product2.jpg"
          productName="Product 2"
          productDescription="This is Product 2. Nullam sollicitudin sapien et dui mollis lacinia."
        />
      </div>
    </div>
  );
};

export default ProductData;
