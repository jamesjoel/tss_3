import { createSlice } from '@reduxjs/toolkit'



let CartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addCart(state, action){
            
            // return state = action.payload;
            state.push(action.payload);
        },
        delCart(state, action){
            return state.filter(item=>item.id != action.payload)
        }
    }
})

export default CartSlice.reducer;
export let { addCart, delCart } = CartSlice.actions;