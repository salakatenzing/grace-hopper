import React, { useEffect } from 'react';
import CartItem from './CartItem';
import Subtotal from './Subtotal';
import PromoCode from './PromoCodeCart';
import PromoCodeCart from './PromoCodeCart';

export default function ShoppingCart() {
  return (
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Your cart</span>
        <span className="badge bg-primary rounded-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        <CartItem />
        <CartItem />
        <CartItem />
        <PromoCodeCart />
        <Subtotal />
      </ul>
      <PromoCode />
    </div>
  );
}
