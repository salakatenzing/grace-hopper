import React from 'react';
import CartItem from './CartItem';
import Subtotal from './Subtotal';
import PromoCodeCart from './PromoCodeCart';
import PromoRedeem from './PromoRedeem';

export default function ShoppingCart() {
  return (
    <div class="col-md-5 col-lg-4 order-md-last">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary">Your cart</span>
        <span class="badge bg-primary rounded-pill">3</span>
      </h4>
      <ul class="list-group mb-3">
        <CartItem />
        <CartItem />
        <CartItem />
        <PromoCodeCart />
        <Subtotal />
      </ul>

      <PromoRedeem />
    </div>
  );
}
