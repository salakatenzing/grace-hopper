import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import SingleProduct from './SingleProduct';
import SimpleSingleItem from './SimpleSingleItem';
import { fetchMainCategory, selectAllProducts } from './allProductsSlice';
import 'react-multi-carousel/lib/styles.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import SingleProductDetail from '../productDetail/SingleProductDetail';


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
  const [subTypes, setSubTypes] = useState([])

  const allProducts = useSelector(selectAllProducts)
  const mainCategory = location.pathname.split('/')[2]
  const [currentProduct, setCurrentProduct] = useState({})


  useEffect(() => {
    switch(mainCategory){
      case 'produce':
        setSubTypes(['fruit', 'vegetable', 'other'])
        break
      case 'meat':
        setSubTypes(['seafood', 'pork', 'poultry', 'beef', 'other'])
        break
      case 'dairy-eggs':
        setSubTypes(['milk', 'eggs', 'cheese', 'yogurt', 'butter', 'other'])
        break;
      case 'beverages':
        setSubTypes(['water', 'soda', 'coffee', 'tea', 'juice', 'other'])
        break;
      case 'dried-goods':
        setSubTypes(['grains', 'canned-goods', 'pasta', 'other'])
        break;
      default:
        return
      }
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
        {allProducts && allProducts
        .map((product) => (
          <SimpleSingleItem key={uuidv4()} product={product.product} />
        ))}
      </Carousel>

      {subTypes && subTypes.map((title)=> {
        return (
          <>
          <Link to={`/products/${mainCategory}/${title}`}><h2 key={uuidv4()} className="mt-5">{title}</h2></Link>
          <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
        >
          {allProducts && allProducts
          .filter((product)=> {
            return (product.sub_type === title)
          })
          .map((product) => (
            <div key={uuidv4()} onClick={() => setCurrentProduct(product.product)}>
              <SingleProduct  product={product.product} />
            </div>
          ))}
        </Carousel>
          <SingleProductDetail product={currentProduct} />
        </>
        )
      })}
    </div>
  );
}
