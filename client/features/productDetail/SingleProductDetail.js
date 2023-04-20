import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {selectSingleProduct, fetchSingleProduct} from './singleProductSlice'
import {useParams} from "react-router-dom";

export default function SingleProductDetail() {
  const dispatch = useDispatch()
  const {productId} = useParams();
  const singleItem = useSelector(selectSingleProduct)
  const { name, description, price, per_unit, image} = singleItem;

  useEffect(() => {
    dispatch(fetchSingleProduct(productId))
  }, [dispatch])
  
  return(
    <>
    {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}
    <div className={modal ? "modal" : undefined} id="productModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* most things in here will be replaced with actual info */}
            <img src={image} alt="product pic here" width="400px"/>
            <h5>{price}</h5>
            <h6>{per_unit}</h6>
            <p>{description}</p>
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
    </>
  )
};
