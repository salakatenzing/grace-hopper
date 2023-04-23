/* eslint-disable react/prop-types */
import React from 'react';

export default function Subtotal({ cartItems }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>Total (USD)</span>
      <strong>
        ${cartItems.reduce((acc, curr) => acc + curr.quantity * 1.99, 0)}
      </strong>
    </li>
  );
}
