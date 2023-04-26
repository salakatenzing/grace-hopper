/* eslint-disable react/prop-types */
import React from 'react';

export default function SimpleSingleItem({ product }) {
  if (product) {
    return (
      <div className='card-group'>
      <div className="card " style={{ width: '10rem', height: '180px' }}>
        <img src={product.image} className="card-img-top" alt="..." height='100rem'/>
        <div className="card-body">
          <p className="card-title" style={{height: "50px", overflow: "clip"}}>{product.name}</p>
        </div>
      </div>
      </div>
    );
  }
}
