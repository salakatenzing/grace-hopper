import React from 'react';

export default function PromoCodeCart() {
  return (
    <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
      <div className="text-success">
        <h6 className="my-0">Promo code</h6>
        <small>EXAMPLECODE</small>
      </div>
      <span className="text-success">−$5</span>
    </li>
  );
}
