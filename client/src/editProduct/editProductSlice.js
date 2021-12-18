import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    listProduct:{},
    indexEdit:-1,
}

const editProductSlice = createSlice({
    name: 'edit',
    initialState,
    reducers: {
        editProduct: (state , action) => {
            state.listProduct[state.editIndex] = action.addUser
        }
    }
})
const { reducer, actions } = editProductSlice;

export const { editProduct } = actions;
export default reducer