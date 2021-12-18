import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    product:{}
}
const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addProduct:(state,action) =>{
            state.product = action.payload
        }
    }
});

const { reducer, actions } = productSlice ;

export const {addProduct} = actions;
export default reducer