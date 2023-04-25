import React, { useEffect } from 'react';
import CartItem from './CartItem';
import Subtotal from './Subtotal';
import PromoCodeCart from './PromoCodeCart';
import PromoRedeem from './PromoRedeem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, selectCartItems } from './cartSlice';
import { v4 as uuidv4 } from 'uuid';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(fetchCart(window.localStorage.getItem('token')));
  }, [dispatch]);

  return (
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Your cart</span>
        <span className="badge bg-primary rounded-pill">
          {cartItems && cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        </span>
      </h4>

      <ul className="list-group mb-3">
        {cartItems &&
          cartItems.map((item) => <CartItem key={uuidv4()} item={item} />)}
        {/* <PromoCodeCart /> */}
        {cartItems && <Subtotal cartItems={cartItems} />}
      </ul>

      {/* <PromoRedeem /> */}
    </div>
  );
}
