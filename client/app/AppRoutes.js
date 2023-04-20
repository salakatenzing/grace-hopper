import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import CartPage from '../features/Cart/CartPage';
import AllProducts from '../features/products/AllProducts-Page';
import NotFoundPage from '../features/NotFoundPage/NotFoundPage';
import { me } from './store';
import { selectUser } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(me());
    console.log(user);
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route index element={<Home />} />
          {/* <Route to="/home" element={<Home />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route index element={<Home />} />
          {/* <Route to="/home" element={<Home />} /> */}
          <Route path="/products/produce" element={<AllProducts />} />
          <Route path="/products/dairy-eggs" element={<AllProducts />} />
          <Route path="/products/meat" element={<AllProducts />} />
          <Route path="/products/dried-goods" element={<AllProducts />} />
          <Route path="/products/beverages" element={<AllProducts />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
