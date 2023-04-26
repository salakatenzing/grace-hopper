import React from 'react';
import Promotions from '../promotions/Promotions';
import ProductCards from '../productCards/ProductCards';
import { productCategories } from './productCategories';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  return (
    <div>
      <Promotions />
      <div className="d-flex flex-row flex-wrap mt-5 justify-content-center">
        {productCategories.map((category) => (
          <ProductCards key={uuidv4()} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
