import axios from 'axios';
import { API } from '../config/constants';

let API_URL = API+"category";

let getAllData = async ()=>{
    let response = await axios.get(API_URL);
    return response.data;
}

let saveData = async (data)=>{
    let response = await axios.post(API_URL, data);
    return response.data;
}
//localhost:3001/api/category?id=124512
let deleteData = async (id)=>{
    let response = await axios.delete(API_URL+"?id="+id);
    return response.data;
}

export {getAllData, saveData, deleteData}