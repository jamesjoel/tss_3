import axios from 'axios';

const API_URL = "http://localhost:3001/api/user/auth";

let Auth = async (formData)=>{
    let result = await axios.post(`${API_URL}`, formData);
    return result.data;
}

export { Auth };