import React, { useEffect } from 'react';

export default function Subtotal() {
  return (
    <div className="card mt-5 me-5 ms-1" style={{ width: '35rem' }}>
      <div className="card-body">
        <h5 className="card-title">Subtotal</h5>
        <hr />
        <button type="button" className="btn btn-primary">
          Purchase
        </button>
      </div>
    </div>
  );
}
