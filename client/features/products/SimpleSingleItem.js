import React from 'react';

export default function SimpleSingleItem({ product }) {
  return (
    <div className="card " style={{ width: '10rem' }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-title">{product.name}</p>
      </div>
    </div>
  );
}
