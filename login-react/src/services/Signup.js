import axios from 'axios';

const API_URL = "http://localhost:3001/api/user/signup";

let doSignup = async (formData)=>{
    let result = await axios.post(`${API_URL}`, formData);
    return result.data;
}

export { doSignup };