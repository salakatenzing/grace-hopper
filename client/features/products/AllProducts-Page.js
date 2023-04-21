import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import SingleProduct from './SingleProduct';
import SimpleSingleItem from './SimpleSingleItem';
import { fetchAllProducts, fetchMainCategory, selectAllProducts } from './allProductsSlice';
import 'react-multi-carousel/lib/styles.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useLocation } from 'react-router-dom';



const dummyData = [
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
];

export default function AllProducts() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const dispatch = useDispatch()
  const location = useLocation()

  const allProducts = useSelector(selectAllProducts)
  console.log(allProducts)

  useEffect(() => {
    const mainCategory = location.pathname.split('/')[2]
    console.log('This is my category', mainCategory)
    dispatch(fetchMainCategory(mainCategory))
  }, [dispatch])


  return (
    <div className="p-5">
      <h2>Suggestions</h2>
      <Carousel
        className="w-75 m-auto"
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
      >
        {allProducts && allProducts.map((product) => (
          <SimpleSingleItem key={uuidv4()} product={product} />
        ))}
      </Carousel>

      <h2 className="mt-5">Fruits</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
      >
        {allProducts && allProducts.map((product) => (
          <SingleProduct key={uuidv4()} product={product} />
        ))}
      </Carousel>
      <h2 className="mt-5">Vegetables</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10500}
      >
        {allProducts && allProducts.map((product) => (
          <SingleProduct key={uuidv4()} product={product} />
        ))}
      </Carousel>
    </div>
  );
}
