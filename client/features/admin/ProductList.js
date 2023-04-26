import React, { useState, useEffect } from 'react';
import {
  fetchAllProducts,
  selectAllProducts,
  fetchMainCategory,
  deleteProduct,
} from './adminAllProductsSlice';
import { deleteSingleProduct } from '../products/allProductsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ProductInfo from './ProductInfo';
import UpdateProduct from './UpdateProduct';

const ProductList = () => {
  const allProducts = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleProductDelete = async (productId) => {
    await dispatch(deleteProduct(productId));
    dispatch(fetchAllProducts());
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col bg-dark-subtle">Image</div>
        <div className="col bg-dark-subtle">Product</div>
        <div className="col bg-dark-subtle">Main Type</div>
        <div className="col bg-dark-subtle">SubType</div>
        <div className="col bg-dark-subtle">Info</div>
        <div className="col bg-dark-subtle">Price</div>
        <div className="col bg-dark-subtle">Stock Quantity</div>
        <div className="col bg-dark-subtle">Price/Unit</div>
        <div className="col bg-dark-subtle">Actions</div>
      </div>
      {allProducts.map((product) => {
        const productInfoId = `productInfo-${product.id}`;
        const updateProductId = `updateProduct-${product.id}`;
        const uuid = uuidv4();
        return (
          <div
            key={uuid}
            className="row align-items-center"
            style={{ border: '1px solid #ccc' }}
          >
            <div className="col">
              <img
                src={product.image}
                className="img-thumbnail"
                alt="..."
                width="50"
                height="50"
              />
            </div>
            <div className="col">{product.name}</div>
            <div className="col">{product.product_tags[0].main_type}</div>
            <div className="col">{product.product_tags[0].sub_type}</div>
            <div className="col">
              <button
                type="button"
                className="btn btn-info btn-sm"
                data-bs-container="body"
                data-bs-toggle="modal"
                data-bs-target={`#${productInfoId}`}
              >
                <i className="bi bi-info-circle"></i>
              </button>
              <ProductInfo product={product} id={productInfoId} />
            </div>
            <div className="col">{product.price}</div>
            <div className="col">{product.stock_qty}</div>
            <div className="col">{product.per_unit}</div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary btn-sm mx-1"
                data-bs-container="body"
                data-bs-toggle="modal"
                data-bs-target={`#${updateProductId}`}
              >
                <i className="bi bi-pencil"></i>
              </button>
              <UpdateProduct product={product} id={updateProductId} />
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => handleProductDelete(product.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
