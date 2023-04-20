import React from 'react';
import Navbar from '../navbar/Navbar';
import Promotions from '../promotions/Promotions';
import ProductCards from '../productCards/ProductCards';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Promotions />
      <ProductCards />
    </div>
  );
};


export default Home;
