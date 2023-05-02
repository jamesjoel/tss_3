import { createSlice } from '@reduxjs/toolkit'

let AuthSlice = createSlice({
    initialState : "",
    name : "authslice",
    reducers : {
        setToken(state, action){
            return state = action.payload;
        }
    }
})

export let { setToken } = AuthSlice.actions;
export default AuthSlice.reducer;
