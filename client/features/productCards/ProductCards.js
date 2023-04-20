import React from 'react';

const ProductCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="card product-card">
            <div className="card-body">
              <h5 className="card-title">Meat</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="card product-card">
            <div className="card-body">
              <h5 className="card-title">Beverages</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="card product-card">
            <div className="card-body">
              <h5 className="card-title">Dairy &amp; Eggs</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="card product-card">
            <div className="card-body">
              <h5 className="card-title">Dried Goods</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <div className="card product-card">
            <div className="card-body">
              <h5 className="card-title">Produce</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
