import { createSlice } from '@reduxjs/toolkit'



let ProductSlice = createSlice({
    name : 'product',
    initialState : [],
    reducers : {
        addPro(state, action){
            // replace
            return state = action.payload;
        }
    }
})

export default ProductSlice.reducer;
export let { addPro } = ProductSlice.actions;