import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    listProduct:[]
}

const createProductSlice = createSlice({
    name: 'create',
    initialState,
    reducers: {
        createProductRd: (state , action) => {
            state.listProduct.push(action.payload)
        }
    }
})

const { reducer, actions } = createProductSlice;

export const { createProductRd } = actions;
export default reducer