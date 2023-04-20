import React from 'react';

export default function CartItem() {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between">
        <div className="p-2">
          <div className="d-flex flex-row">
            <input
              type="number"
              className="form-control pe-1"
              aria-describedby="qty"
              style={{ width: '3.5rem', height: '3.5rem' }}
            />
            <img
              src="https://i5.walmartimages.com/asr/a17200ff-9c08-4db1-b3d1-ceab704282f5.50ad3f85a2a210226314c5aaab365f2d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              alt="image of product"
              className="img-fluid rounded ms-3 me-3"
              style={{ height: '5rem' }}
            ></img>
            <div>
              <h5>Carrots</h5>
              <p>remove</p>
            </div>
          </div>
        </div>
        <div class="p-2">
          <p>$5.99</p>
        </div>
      </div>
    </div>
  );
}
