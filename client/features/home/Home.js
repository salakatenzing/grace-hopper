import React from 'react';
import Promotions from '../promotions/Promotions';
import ProductCards from '../productCards/ProductCards';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const productCategories = [
    {
      name: 'Produce',
      image:
        'https://www.operationfoodsearch.org/wp-content/uploads/2018/05/produce-image.png',
      url: 'produce',
    },
    {
      name: 'Dairy & Eggs',
      image:
        'https://thrivemeetings.com/wp-content/uploads/2014/05/Milk-Egg-Wheat-iStock-983901002.jpg',
      url: 'dairy-eggs',
    },
    {
      name: 'Meat',
      image:
        'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/10/redMeat-849360782-770x553.jpg',
      url: 'meat',
    },
    {
      name: 'Dried Goods',
      image:
        'https://itk-assets.nyc3.cdn.digitaloceanspaces.com/2020/03/pantry-essentials-dry-goods-coronavirus.jpeg',
      url: 'dried-goods',
    },
    {
      name: 'Beverages',
      image:
        'https://www.packagingdigest.com/sites/packagingdigest.com/files/AdobeStock_279692163_Editorial_Use_Only-Beverage-FTR-new.jpg',
      url: 'beverages',
    },
  ];
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
