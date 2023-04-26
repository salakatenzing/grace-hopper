import React from 'react';

import ShoppingCart from './ShoppingCart';
import Billing from './Billing';

export default function CartPage() {
  return (
    <div className="row g-5 w-50 m-auto">
      <ShoppingCart />
      <Billing />
    </div>
  );
}
