import axios from 'axios';
import {API} from '../config/constants';

let API_URL = API+"admin/auth";

let Auth = async (data)=>{
    let res = await axios.post(API_URL, data);
    return res.data;
}

export { Auth };