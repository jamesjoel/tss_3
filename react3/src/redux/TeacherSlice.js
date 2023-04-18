import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_URL = "http://localhost:3001/teacher";

let AddTeacher = createAsyncThunk('addteacher', async(obj)=>{
    let res = await axios.post(API_URL, obj);
    return res.data;
})
let DeleteTeacher = createAsyncThunk('deleteteacher', async(obj)=>{
    let res = await axios.delete(`${API_URL}/${obj.id}`);
    return res.data;
})
let GetTeacher = createAsyncThunk('getteacher', async()=>{
    let res = await axios.get(API_URL);
    return res.data;
})
let UpdateTeacher = createAsyncThunk('updateteacher', async(obj)=>{
    let res = await axios.put(`${API_URL}/${obj.id}`, obj);
    return res.data;
})


let TeacherReducer = createSlice({
    name : 'teacher',
    initialState : [],
    reducers : {
        demo(state, action){
            console.log("hello");
        }
    },
    extraReducers : {
        [AddTeacher.fulfilled] : (state, action)=>{
           
            state.push(action.payload);
        },
        [DeleteTeacher.fulfilled] : (state, action)=>{
            return state.filter(item=>item.id != action.payload.id);
        },
        [GetTeacher.fulfilled] : (state, action)=>{
            return state = action.payload;
        },
        [UpdateTeacher.fulfilled] : (state, action)=>{
            return state.map((item)=>{
                if(item.id == action.payload.id)
                {
                    return action.payload;
                }else{
                    return item;
                }
            })
        }
    }
})

export default TeacherReducer.reducer;
export { AddTeacher, DeleteTeacher, UpdateTeacher, GetTeacher };