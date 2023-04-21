import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductSubtype = createAsyncThunk(
  '/products/productSubType', 
  async(subType) => {
  try {
    const {data} = await axios.get(`/api/products`)
    console.log("data in thunk >>", data.filter((product) => product.name === 'Green Apple'))
    return data.filter((product) => product.product_tags[0].sub_type === subType)
  } catch(err) {
    console.log(err)
  }
})

const productSubType = createSlice({
  name: 'productSubTypeItems',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductSubtype.fulfilled, (state, action) => {
      return action.payload
    })
  }
});

export const selectProductSubtypeItems = (state) => state.productSubTypeItems;
export default productSubType.reducer;