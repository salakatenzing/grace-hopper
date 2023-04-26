/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    const token = window.localStorage.getItem('token');
    const productId = item.product.id;
    const quantity = -1;
    if (item.quantity > 0) dispatch(addToCart({ quantity, productId, token }));
  };
  return (
    <li className="list-group-item d-flex justify-content-between lh-sm">
      <div>
        {console.log('this is the item!: ', item)}
        <h6 className="my-0">{item.product.name}</h6>
        <i
          className="btn bi bi-dash-circle text-danger p-0 me-2"
          onClick={handleClick}
        ></i>
        <small className="text-body-secondary">Qty: {item.quantity}</small>
      </div>
      <span className="text-body-secondary">
        ${(item.quantity * item.product.price).toFixed(2)}
      </span>
    </li>
  );
}
