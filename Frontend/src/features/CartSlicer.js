import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from '../api/axios'

const initialState = {
    cartItems: []
}

export const addToCart = createAsyncThunk('/add/cart', async ({ id, qty }) => {
    const { data } = await axios.get(`/api/products/${id}`);
    console.log(qty);
    return {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
    };
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.fulfilled, (state, action) => {
                const item = action.payload;

                const existItem = state.cartItems.find(x => x.product === item.product)

                if (existItem) {
                    state.cartItems = state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
                else {
                    state.cartItems.push(item)
                }

                //After Cart State Update, Im saving To Local Storage so in the store, the cart preloaded state is gotten from the local storage and used Globally
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            })
    }
})

export const cartActions = cartSlice.actions;

export const selectAllItems = (state) => state.cart

export default cartSlice.reducer