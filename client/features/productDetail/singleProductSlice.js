import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk('/products/fetchOne', async() => {
  try {
    const {data} = await axios.get()
    return data
  } catch(err) {
    console.log(err)
  }
})

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      return action.payload
    })
  }
});

export const selectSingleProduct = (state) => state.singleProduct;
export default singleProductSlice.reducer;