import React from 'react';
import AddProduct from './AddProduct';
import Searchbar from './Searchbar';
import ProductList from './ProductList';

const Admin = () => {
  return (
    <div>
      <Searchbar />
      <ProductList />
    </div>
  );
};

export default Admin;
