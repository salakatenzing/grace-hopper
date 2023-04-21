import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk('/products/fetchAll', async() => {
  try {
    const {data} = await axios.get('/api/products')
    return data
  } catch(err) {
    console.log(err)
  }
})

export const fetchMainCategory = createAsyncThunk('/products/mainCategory', async(main_type) => {
  try {
    const {data} = await axios.get(`/api/product-tags/maintype/${main_type}`)
    console.log('This is my Data', data)
    return data
  } catch(err) {
    console.log(err)
  }
})

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(fetchMainCategory.fulfilled, (state, action)=> {
      return action.payload
    })
  }
});

export const selectAllProducts = (state) => state.allProducts;
export default allProductsSlice.reducer;
