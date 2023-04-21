import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleProduct = createAsyncThunk(
  '/products/fetchOne',
  async (product) => {
    try {
      const { data } = await axios.get(`/api/products/${product}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleProduct = (state) => state.singleProduct;
export default singleProductSlice.reducer;
