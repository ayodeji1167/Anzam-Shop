import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../api/axios';


const initialState = {
    product: { reviews: [] },
    status:'idle',
    error: null
}

export const fetchProduct = createAsyncThunk('/fetch/product', async(id)=>{
    const { data } = await axios.get(`/api/products/${id}`);
    return data;
})

const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending , (state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchProduct.fulfilled, (state, action)=>{
            state.status = 'succeeded'
            state.product = action.payload
        })
        .addCase(fetchProduct.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })

    }
})

export const productDetailsAction = productDetailsSlice.actions;
export const selectProoductDetails = (state)=> state.productDetails


export default productDetailsSlice.reducer