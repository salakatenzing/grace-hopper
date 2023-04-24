import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../products/allProductsSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [subType, setSubType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock_qty, setQuantity] = useState(0);
  const [per_unit, setPricePerUnit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addProduct({
        name,
        type,
        subType,
        description,
        price,
        stock_qty,
        per_unit,
      })
    );
    setName('');
    setType('');
    setSubType('');
    setDescription('');
    setPrice(0);
    setQuantity(0);
    setPricePerUnit('');
  };
  return (
    <div className="modal" id="addProductForm" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Product</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="product-name" className="col-form-label">
                  Product:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="product-type" className="col-form-label">
                  Type:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-type"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="product-subtype" className="col-form-label">
                  Subtype:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-subtype"
                  value={subType}
                  onChange={(event) => setSubType(event.target.value)}
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
                  onChange={(event) => setDescription(event.target.value)}
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
                  onChange={(event) => setPrice(event.target.value)}
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
                  onChange={(event) => setQuantity(event.target.value)}
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
                  onChange={(event) => setPricePerUnit(event.target.value)}
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
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
