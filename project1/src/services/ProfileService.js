import axios from 'axios';

let getUserProfileData = async (token) => {
    let response = await axios.get("http://localhost:3001/api/profile?token="+token)
    return response.data;
}

export { getUserProfileData };