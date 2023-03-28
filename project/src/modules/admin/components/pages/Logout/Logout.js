import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  
    let navigate = useNavigate();
    useEffect(()=>{
        localStorage.removeItem("_admin_token");
        navigate("/");
    }, [])
}

export default Logout