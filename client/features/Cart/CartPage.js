import React from 'react';
// import { Link } from 'react-router-dom';
// import CartItem from './CartItem';
import ShoppingCart from './ShoppingCart';
import Billing from './Billing';
// import Subtotal from './Subtotal';

export default function CartPage() {
  return (
    <div className="row g-5 w-50 m-auto">
      <ShoppingCart />
      <Billing />
    </div>
  );
}
