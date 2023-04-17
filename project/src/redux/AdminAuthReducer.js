import { createSlice } from '@reduxjs/toolkit'

let AdminAuthSlice = createSlice({
    name : 'adminauth',
    initialState : "",
    reducers : {
        createToken(state, action){
            return state = action.payload;
        }
    }
})

export default AdminAuthSlice.reducer;

export let { createToken } = AdminAuthSlice.actions;