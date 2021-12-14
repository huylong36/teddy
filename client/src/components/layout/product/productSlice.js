import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addProduct:(state,action) =>{
 
        }
    }
});

const { reducer, actions } = productSlice ;

export const {addProduct} = actions;
export default reducer