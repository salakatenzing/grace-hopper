/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/cartSlice';

export default function SingleProduct({ product }) {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const productId = event.target.id;
    const quantity = 1;
    dispatch(addToCart({ quantity, productId, token }));
  };
  if (product) {
    return (
      <div className="card me-2" style={{ height: '410px' }}>
        <img
          src={product.image}
          style={{ height: '200px' }}
          className="card-img-top"
          alt="..."
          data-bs-toggle="modal"
          data-bs-target="#productModal"
        />
        <div className="card-body">
          <h5 className="card-title ">
            {product.name.length > 15
              ? product.name.slice(0, 15) + '...'
              : product.name}
          </h5>
          <p className="card-text">${product.price}</p>
          <button
            type="submit"
            id={product.id}
            onClick={handleSubmit}
            className="btn btn-primary "
          >
            <i
              id={product.id}
              className="bi bi-basket me-1 fs-3 text-light"
            ></i>
          </button>
        </div>
      </div>
    );
  } else return <></>;
}
