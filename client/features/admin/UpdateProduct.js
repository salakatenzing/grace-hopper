import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './adminAllProductsSlice';

const UpdateProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState({});
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [stock_qty, setQuantity] = useState(product.stock_qty);
  const [per_unit, setPricePerUnit] = useState(product.per_unit);

  useEffect(() => {
    setCurrentProduct(product);
  }, [product]);

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const priceChange = (event) => {
    setPrice(event.target.value);
  };

  const quantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const perUnitChange = (event) => {
    setPricePerUnit(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedProduct = {
        ...product,
        name,
        description,
        price,
        stock_qty,
        per_unit,
      };
      await dispatch(updateProduct(updatedProduct));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal" id={`updateProduct-${product.id}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Product</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              id={`updateProductForm-${product.id}`}
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="product-name" className="col-form-label">
                  Product:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-name"
                  value={name}
                  onChange={nameChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="product-description" className="col-form-label">
                  Description:
                </label>
                <textarea
                  className="form-control"
                  id="product-description"
                  value={description}
                  onChange={descriptionChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="product-price" className="col-form-label">
                  Price:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="product-price"
                  value={price}
                  onChange={priceChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="product-quantity" className="col-form-label">
                  Quantity:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="product-quantity"
                  value={stock_qty}
                  onChange={quantityChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="product-price-unit" className="col-form-label">
                  Price/Unit:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-price-unit"
                  value={per_unit}
                  onChange={perUnitChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
