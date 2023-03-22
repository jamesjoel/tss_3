import axios from 'axios';
import { API } from '../config/constants'
const API_URL = API+"auth";
let Auth = async (data)=>{
    let response = await axios.post(API_URL, data);
    return response.data;
}

export {Auth};