import React from 'react';

export default function SingleProduct({ product }) {
  return (
    <div className="card me-2">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <a href="#" className="btn btn-primary">
          Add
        </a>
      </div>
    </div>
  );
}
