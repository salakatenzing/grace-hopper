import React, { useEffect, useState } from "react";


export default function SingleProductDetail({product}) {
  const [currentProduct, setCurrentProduct] = useState({})

  useEffect(() => {
    setCurrentProduct(product)
  }, [])

  return(
    <div key={currentProduct.id} className="modal" id="productModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img src={product.image} alt="product pic here" width="400px"/>
            <h5>{product.price}/ea</h5>
            <h6>{product.per_unit}</h6>
            <p>{product.description}</p>
          </div>
          <div className="modal-footer">
            <input type="number" name="quantity" min="1" max={product.stock_qty} style={{width: "50px"}}/>
            <button type="button" className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
};
