import axios from 'axios'

const API_URL = "http://localhost:3001/teacher";

let getData = async (id)=>{
    // let res = await axios.get(API_URL+"/"+id);
    let res = await axios.get(`${API_URL}/${id}`);
    return res.data;
}
let getAllData = async ()=>{
    let res = await axios.get(API_URL);
    return res.data;
}
let insertData = async (obj)=>{
    let res = await axios.post(API_URL, obj);
    return res.data;
}
let deleteData = async (id)=>{
    let res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
}
let updateData = async (id, obj)=>{
    let res = await axios.put(`${API_URL}/${id}`, obj);
    return res.data;
}


export { updateData, deleteData, getAllData, getData, insertData };

