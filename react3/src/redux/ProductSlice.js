import { createSlice } from '@reduxjs/toolkit'



let ProductSlice = createSlice({
    name : 'product',
    initialState : [],
    reducers : {
        addPro(state, action){
            
            return state = action.payload;
        }
    }
})

export default ProductSlice.reducer;
export let { addPro } = ProductSlice.actions;