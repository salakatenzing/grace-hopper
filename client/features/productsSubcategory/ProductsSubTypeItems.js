import React, { useEffect } from "react";
import SingleProductDetail from "../productDetail/SingleProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductSubtype, selectProductSubtypeItems } from "./productSubTypeSlice";
import { useLocation } from "react-router";

export default function ProductsSubTypeItems() {
  const dispatch = useDispatch();
  const subTypeItems = useSelector(selectProductSubtypeItems)
  const location = useLocation();
  const maintype = location.pathname.split('/')[2]
  const subtype = location.pathname.split('/')[3]

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
            <div className="card" style={{width: "18rem"}} data-bs-toggle="modal" data-bs-target="#productModal">
              <img className="card-img-top" src={product.product.image} alt="Card image cap" width="16rem"/>
              <div className="card-body">
                <h5 className="card-title">{product.product.name}</h5>
                <p>{product.product.price}/ea.</p>
                <p className="card-text">{product.product.description}</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            <SingleProductDetail product={product.product}/>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
};
