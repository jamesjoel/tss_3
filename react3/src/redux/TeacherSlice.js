import { createSlice } from '@reduxjs/toolkit'

let data = [
    {
        id : 1,
        name : "ritesh",
        city : "indore"
    },
    {
        id : 2,
        name : "parul",
        city : "mumbai"
    },
    {
        id : 3,
        name : "jaya",
        city : "mumbai"
    },
    {
        id : 4,
        name : "gaurav",
        city : "indore"
    },
    
    {
        id : 5,
        name : "nilesh",
        city : "bhopal"
    }
]
let TeacherSlice = createSlice({
    initialState : data,
    name : 'teacher',
    reducers : {
        delTecher(state, action){
            return state.filter(item=>item.city != action.payload)
        }
    }
})

export default TeacherSlice.reducer;
export let { delTecher } = TeacherSlice.actions;