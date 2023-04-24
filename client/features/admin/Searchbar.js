import React from 'react';
import AddProduct from './AddProduct';

const Searchbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <form style={{ marginLeft: '94px' }}>
        <div className="mb-3">
          <label htmlFor="searchInventory" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="searchInventory"
            placeholder="Search Inventory"
            style={{ width: '400px' }}
          />
        </div>
      </form>
      <div style={{ marginRight: '94px' }}>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-container="body"
          data-bs-toggle="modal"
          data-bs-target="#addProductForm"
        >
          <i className="bi bi-file-earmark-plus"></i> Add Product
        </button>
        <AddProduct />
      </div>
    </div>
  );
};

export default Searchbar;
