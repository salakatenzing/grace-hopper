import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCards({ category }) {
  return (
    <Link to={`/products/${category && category.url}`}>
      <div className="card me-2 ms-2" style={{ width: '20rem' }}>
        <div className="card-header">{category && category.name}</div>
        <img
          src={category && category.image}
          className="card-img-top rounded"
          alt="..."
        ></img>
      </div>
    </Link>
  );
}
