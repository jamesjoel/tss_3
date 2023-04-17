import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createToken } from '../../../../../redux/AdminAuthReducer'
const Logout = () => {
  
    let navigate = useNavigate();
    let disp = useDispatch();
    useEffect(()=>{
        localStorage.removeItem("_admin_token");
        disp(createToken(""));
        navigate("/");
    }, [])
}

export default Logout