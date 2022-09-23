import { configureStore } from '@reduxjs/toolkit'
import productListSlice from './features/productListSlice';
import productDetailsSlice from './features/ProductDetailsSlice';
import CartSlice from './features/CartSlicer';


// Using Local Storage because we dont want to lost all cart items on reload
const getCartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: { cartItems: getCartItemsFromStorage }
}

const store = configureStore({
    reducer: {
        productList: productListSlice,
        productDetails: productDetailsSlice,
        cart: CartSlice
    },
    preloadedState: initialState

})

export default store;