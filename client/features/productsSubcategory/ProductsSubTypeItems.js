import React, { useEffect, useState } from "react";
import SingleProductDetail from "../productDetail/SingleProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductSubtype, selectProductSubtypeItems } from "./productSubTypeSlice";
import { useLocation } from "react-router";
import { addToCart } from "../Cart/cartSlice";

export default function ProductsSubTypeItems() {
  const dispatch = useDispatch();
  const subTypeItems = useSelector(selectProductSubtypeItems)
  const location = useLocation();
  const maintype = location.pathname.split('/')[2]
  const subtype = location.pathname.split('/')[3]
  const [currentProduct, setCurrentProduct] = useState({})

  const handleSubmit = (event) => {
    console.log('this is event.target.id >>> ', event.target.id)
    event.preventDefault();
    const token = window.localStorage.getItem('token')
    const productId = event.target.id
    const quantity = 1
    dispatch(addToCart({quantity, productId, token}))    

  }

  useEffect(() => {
    dispatch(fetchProductSubtype({maintype, subtype}))
  }, [dispatch])

  return (
    <div>
      <h1>{subtype}</h1>
      <hr />
      <div className="row">
      {subTypeItems.map((product) => {
        return(
          <div className="col-sm-3" key={product.product.id}>
            <div className="card" style={{width: "18rem"}} 
            onClick={()=> setCurrentProduct(product.product)}>
              <img className="card-img-top" src={product.product.image} alt="Card image cap" width="16rem" data-bs-toggle="modal" data-bs-target="#productModal"/>
              <div className="card-body">
                <h5 className="card-title">{product.product.name}</h5>
                <p>{product.product.price}/ea.</p>
                <p className="card-text">{product.product.description}</p>
                <button type="submit" id={product.product.id} onClick={handleSubmit} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        )
      })}
      <SingleProductDetail product={currentProduct}/>
      </div>
    </div>
  )
};
