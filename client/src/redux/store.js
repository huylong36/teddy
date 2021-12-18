import {configureStore} from '@reduxjs/toolkit'

import productReducer from '../components/layout/product/productSlice'
import userReducer from '../components/auth/userSlice'
import createProductSlice from '../components/createProduct/createProductSlice'
const rootReducers = {
   product: productReducer,
   user:userReducer,
   createProduct : createProductSlice,
}
const store = configureStore({
    reducer: rootReducers,
})
export default store;