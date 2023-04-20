import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductSubtype = createAsyncThunk('/products/productSubType', async() => {
  try {
    const {data} = await axios.get()
    return data
  } catch(err) {
    console.log(err)
  }
})

const productSubType = createSlice({
  name: 'productSubTypeItems',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      return action.payload
    })
  }
});

export const selectProductSubtypeItems = (state) => state.productSubTypeItems;
export default productSubType.reducer;