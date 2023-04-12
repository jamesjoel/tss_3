import { createSlice } from '@reduxjs/toolkit'
let data = [
    {
        id : 1,
        name : "rohit",
        age : 25
    },
    {
        id : 2,
        name : "amar",
        age : 21
    },
    {
        id : 3,
        name : "jaya",
        age : 27
    }
]

let StudentSlice = createSlice({
    name : 'student',
    initialState : data,
    reducers : {
        addStudent(state, action){ // action.payload
            // console.log(action.payload, "****************");
            state.push(action.payload);
        },
        deleteStudent(state, action){
            return state.filter(item=>item.id != action.payload);
        },
        updateStudent(state, action){
            return state.map((item)=>{
                if(item.id == action.payload.id){
                    return action.payload;
                }else{
                    return item;
                }
            })
        }
    }
});

export default StudentSlice.reducer; // when create store
export let { updateStudent, addStudent, deleteStudent } = StudentSlice.actions;
// on the component