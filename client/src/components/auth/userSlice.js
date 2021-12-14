import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user:{}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state , action) => {
            state.user = action.payload
        }
    }
})
const { reducer, actions } = userSlice;

export const { loginUser } = actions;
export default reducer