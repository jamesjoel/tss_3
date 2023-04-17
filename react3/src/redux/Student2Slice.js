import { createSlice } from '@reduxjs/toolkit'

let Student2Slice = createSlice({
    name : 'student2',
    initialState : [],
    reducers : {
        addStu(state, action){
            console.log(action.payload)
            state.push(action.payload);
        }
    }
})

export default Student2Slice.reducer;
export let { addStu } = Student2Slice.actions