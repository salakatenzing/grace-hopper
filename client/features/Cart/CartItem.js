import React from 'react';

export default function CartItem() {
  return (
    <li className="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 className="my-0">Product name</h6>
        <small className="text-body-secondary">Brief description</small>
      </div>
      <span className="text-body-secondary">$12</span>
    </li>
  );
}
