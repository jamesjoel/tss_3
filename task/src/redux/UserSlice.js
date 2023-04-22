import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
const API_URL = "http://localhost:3001/api/user";

let AddUser = createAsyncThunk("adduser",async(obj)=>{
        let response = await axios.post(`${API_URL}`, obj)
        return response.data;
    }
);
let GetAllUser = createAsyncThunk("getalluser", async ()=>{
    
        let response = await axios.get(`${API_URL}`)

        
        return response.data;
    }
)
let DeleteUser = createAsyncThunk("deleteuser", async (obj)=>{
        await axios.delete(`${API_URL}/${obj._id}`)
        return obj;
    }
)
let UpdateUser = createAsyncThunk("updateuser", async (obj)=>{
        await axios.put(`${API_URL}/${obj._id}`, obj)
        return obj;
    }
)



const UserReducer = createSlice({
    name : "user",
    initialState :[],
    reducers : {
        [AddUser.fulfilled] : (state, action)=>{
            
            state.push(action.payload);
        },
        [GetAllUser.fulfilled] : (state, action)=>{
            
            return state = action.payload;
        },
        [DeleteUser.fulfilled] : (state, action)=>{
            return state.filter(item=>item._id != action.payload._id)
        }, 
        [UpdateUser.fulfilled] : (state, action)=>{
            return state.map(item=>{
                if(item._id == action.payload._id)
                    return action.payload;
                else
                    return item;
                
            })
        }
    }
})

export default UserReducer.reducer;

export { AddUser, UpdateUser, DeleteUser, GetAllUser };