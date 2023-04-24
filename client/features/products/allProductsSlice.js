import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const fetchAllProducts = createAsyncThunk(
  '/products/fetchAll',
  async () => {
    try {
      const { data } = await axios.get('/api/products');
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  '/product/deleteProduct',
  async (productId) => {
    try {
      const { data } = await axios.delete(`/api/products/${productId}`);
      return { id: productId };
    } catch (err) {
      console.log(err);
    }
  }
);

export const addProduct = createAsyncThunk(
  '/product/addProduct',
  async (product) => {
    try {
      console.log('im in the async func', product);
      const newProduct = { ...product };
      console.log(newProduct);
      const { data } = await axios.post('/api/products', newProduct);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchMainCategory = createAsyncThunk(
  '/products/mainCategory',
  async (main_type) => {
    try {
      const { data } = await axios.get(
        `/api/product-tags/maintype/${main_type}`
      );
      console.log('This is my Data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchMainCategory.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const { id } = action.payload;
      return state.filter((product) => product.id !== id);
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      const newProduct = action.payload;
      return [...state, newProduct];
    });
  },
});

export const selectAllProducts = (state) => state.allProducts;
export default allProductsSlice.reducer;
