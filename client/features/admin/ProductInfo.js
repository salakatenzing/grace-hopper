import React, { useEffect, useState } from 'react';

const ProductInfo = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    setCurrentProduct(product);
  }, [product]);
  return (
    <div
      key={currentProduct.id}
      className="modal"
      tabIndex="-1"
      id={`productInfo-${product.id}`}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{currentProduct.name}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{currentProduct.description}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
