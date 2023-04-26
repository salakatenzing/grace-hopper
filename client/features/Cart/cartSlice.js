import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCart = createAsyncThunk('/cart/cartItems', async (token) => {
  try {
    const { data } = await axios.get(
      'https://maverick-merchants.onrender.com/api/cart',
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data.order_items;
  } catch (err) {
    console.log(err);
  }
});

export const addToCart = createAsyncThunk(
  '/cart/addToCart',
  async ({ quantity, productId, token }) => {
    try {
      await axios.put(
        'https://maverick-merchants.onrender.com/api/cart/',
        { quantity, productId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const { data } = await axios.get(
        'https://maverick-merchants.onrender.com/api/cart',
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return data.order_items;
    } catch (err) {
      console.log(err);
    }
  }
);

export const cartCheckOut = createAsyncThunk(
  '/cart/cartCheckOut',
  async (billingDetails) => {
    try {
      await axios.put(
        'https://maverick-merchants.onrender.com/api/cart/checkout',
        { billingDetails },
        {
          headers: {
            Authorization: window.localStorage.getItem('token'),
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(addToCart.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(cartCheckOut.fulfilled, (state, { payload }) => {
      return [];
    });
  },
});

export const selectCartItems = (state) => state.cartItems;
export default cartSlice.reducer;
