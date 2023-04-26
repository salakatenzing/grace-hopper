/* eslint-disable react/prop-types */
import React from 'react';

export default function CartItem({ item }) {
  return (
    <li className="list-group-item d-flex justify-content-between lh-sm">
      <div>
        {console.log('this is the item!: ', item)}
        <h6 className="my-0">{item.product.name}</h6>
        <small className="text-body-secondary">Qty: {item.quantity}</small>
      </div>
      <span className="text-body-secondary">
        ${item.quantity * item.product.price}
      </span>
    </li>
  );
}
