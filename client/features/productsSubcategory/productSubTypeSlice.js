import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductSubtype = createAsyncThunk(
  '/products/productSubType', 
  async({maintype, subtype}) => {
  try {
    const {data} = await axios.get(`/api/product-tags/maintype/${maintype}`)
    console.log('this is the data >>>>', data)
    console.log('this is the subtype in  the thunk >>>', subtype)
    console.log('this is the filtered data >>>>', data.filter((product) => product.sub_type === subtype))
    return data.filter((product) => product.sub_type === subtype)
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