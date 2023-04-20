import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import Home from '../features/home/Home';

import AllProducts from '../features/Products/AllProducts-Page';

//Product Routs

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <AllProducts />
    </div>
  );
};

export default App;
