import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductSubtype = createAsyncThunk(
  '/products/productSubType',
  async ({ maintype, subtype }) => {
    try {
      const { data } = await axios.get(
        `https://maverick-merchants.onrender.com/api/product-tags/maintype/${maintype}`
      );
      return data.filter((product) => product.sub_type === subtype);
    } catch (err) {
      console.log(err);
    }
  }
);

const productSubType = createSlice({
  name: 'productSubTypeItems',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductSubtype.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectProductSubtypeItems = (state) => state.productSubTypeItems;
export default productSubType.reducer;
