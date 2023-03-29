import axios from 'axios';
let API_URL = "http://localhost:3001/api/demo";

let getAllData = async ()=>{
    let response = await axios.get(API_URL);
    return response.data;
}
let getData = async (id)=>{
    let response = await axios.get(API_URL+"?id="+id);
    return response.data;
}
let removeData = async (id)=>{
    let response = await axios.delete(API_URL+"?id="+id);
    return response.data;
}
let insertData = async (data)=>{
    let response = await axios.post(API_URL, data);
    return response.data;
}
let updateData = async (id, data)=>{

}

export { getAllData, getData, removeData, insertData, updateData }