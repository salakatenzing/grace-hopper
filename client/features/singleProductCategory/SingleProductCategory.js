import React from "react";
import SingleProductDetail from "../productDetail/SingleProductDetail";

const SingleProductCategory = () => {
  return (
    <div>
      <SingleProductDetail />
      <h1>Category Name Here!!!</h1>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <div className="card" style={{width: "18rem"}} data-bs-toggle="modal" data-bs-target="#productModal">
            <img className="card-img-top" src="https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg" alt="Card image cap" width="16rem"/>
            <div className="card-body">
              <h5 className="card-title">Item/Product Name</h5>
              <p>$10/ea.</p>
              <p className="card-text">Eating carrots make your teeth clean</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card" style={{width: "18rem"}} data-bs-toggle="modal" data-bs-target="#productModal">
            <img className="card-img-top" src="https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg" alt="Card image cap" width="16rem"/>
            <div className="card-body">
              <h5 className="card-title">Item/Product Name</h5>
              <p>$10/ea.</p>
              <p className="card-text">Eating carrots make your teeth clean</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card" style={{width: "18rem"}} data-bs-toggle="modal" data-bs-target="#productModal">
            <img className="card-img-top" src="https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg" alt="Card image cap" width="16rem"/>
            <div className="card-body">
              <h5 className="card-title">Item/Product Name</h5>
              <p>$10/ea.</p>
              <p className="card-text">Eating carrots make your teeth clean</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card" style={{width: "18rem"}} data-bs-toggle="modal" data-bs-target="#productModal">
            <img className="card-img-top" src="https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg" alt="Card image cap" width="16rem"/>
            <div className="card-body">
              <h5 className="card-title">Item/Product Name</h5>
              <p>$10/ea.</p>
              <p className="card-text">Eating carrots make your teeth clean</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card" style={{width: "18rem"}} data-bs-toggle="modal" data-bs-target="#productModal">
            <img className="card-img-top" src="https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg" alt="Card image cap" width="16rem"/>
            <div className="card-body">
              <h5 className="card-title">Item/Product Name</h5>
              <p>$10/ea.</p>
              <p className="card-text">Eating carrots make your teeth clean</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SingleProductCategory;