import {configureStore} from '@reduxjs/toolkit'

import productReducer from '../components/layout/product/productSlice'
import userReducer from '../components/auth/userSlice'
const rootReducers = {
   product: productReducer,
   user:userReducer,
}
const store = configureStore({
    reducer: rootReducers,
})
export default store;