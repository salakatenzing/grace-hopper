import React, { useEffect } from 'react';
import CartItem from './CartItem';

export default function ShoppingCart() {
  return (
    <div className="card ms-5 mt-5 me-1 flex-grow-1">
      <div className="card-body">
        <h5 className="card-title">Shopping Cart</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <CartItem />
          </li>
          <li className="list-group-item">
            <CartItem />
          </li>
          <li className="list-group-item">
            <CartItem />
          </li>
        </ul>
      </div>
    </div>
  );
}
