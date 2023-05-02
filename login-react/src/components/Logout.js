import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import  { setToken } from '../redux/AuthSlice'

const Logout = () => {
    
    let navigate = useNavigate();
    let disp = useDispatch();
    useEffect(()=>{
        localStorage.removeItem("token");
        disp(setToken(""));
        navigate("/");
    }, [])
}

export default Logout