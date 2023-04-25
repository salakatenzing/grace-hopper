import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ProductList from './ProductList';
import UserList from './UserList';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('products');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container">
      <Searchbar />
      <div className="d-flex justify-content-center">
        <button
          className={`btn btn-lg me-3 ${
            activeTab === 'products' ? 'btn-primary' : 'btn-secondary'
          }`}
          onClick={() => handleTabClick('products')}
        >
          Products
        </button>
        <button
          className={`btn btn-lg ${
            activeTab === 'users' ? 'btn-primary' : 'btn-secondary'
          }`}
          onClick={() => handleTabClick('users')}
        >
          Users
        </button>
      </div>
      {activeTab === 'products' ? <ProductList /> : <UserList />}
    </div>
  );
};

export default Admin;
