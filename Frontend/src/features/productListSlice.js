import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../api/axios'



const initialState = {
    products: [],
    status: 'idle',
    error: null
}

export const fetchProductsList = createAsyncThunk('/product/fetchAll', async () => {
    const { data } = await axios.get('/api/products')
    return data;
})

const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(fetchProductsList.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProductsList.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })
            .addCase(fetchProductsList.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllProducts = (state) => state.productList



export const actions = productListSlice.actions

export default productListSlice.reducer;