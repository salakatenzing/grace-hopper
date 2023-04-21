import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {selectSingleProduct, fetchSingleProduct} from './singleProductSlice'

export default function SingleProductDetail({product}) {
  const dispatch = useDispatch()
  const singleItem = useSelector(selectSingleProduct)
  const { id, name, description, price, per_unit, image} = singleItem;
  const [currentProduct, setNewProduct] = useState('')

  useEffect(() => {
    // dispatch(fetchSingleProduct(productId))
    setNewProduct(product)
  }, [product])
  
  console.log(currentProduct)
  return(
    <div className={"modal"} id="productModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img src={image} alt="product pic here" width="400px"/>
            <h5>{price}/ea</h5>
            <h6>{per_unit}</h6>
            <p>{description}</p>
            <p>this is the product {JSON.stringify(currentProduct)}</p>
          </div>
          <div className="modal-footer">
            <select name="qty" id="qty">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            </select>
            <button type="button" className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
};
