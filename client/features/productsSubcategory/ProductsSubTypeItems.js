import React, { useEffect } from "react";
import SingleProductDetail from "../productDetail/SingleProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductSubtype, selectProductSubtypeItems } from "./productSubTypeSlice";
import { useParams } from "react-router";

export default function ProductsSubTypeItems() {
  const dispatch = useDispatch();
  const subTypeItems = useSelector(selectProductSubtypeItems)
  const {subType} = useParams();

  useEffect(() => {
    dispatch(fetchProductSubtype(subType))
  }, [dispatch])

  return (
    <div>
      <h1>{subType}</h1>
      <hr />
      <div className="row">
      {subTypeItems.map((product) => {
        return(
          <>
          <div className="col-sm-3" key={product.id}>
            <div className="card" style={{width: "18rem"}} data-bs-toggle="modal" data-bs-target="#productModal">
              <img className="card-img-top" src={product.image} alt="Card image cap" width="16rem"/>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p>{product.price}/ea.</p>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            <SingleProductDetail productId={product.id}/>
            </div>
          </div>
          </>
        )
      })}
      </div>
    </div>
  )
};
