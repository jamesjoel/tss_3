import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
export const Logout = () => {
  let navigate = useNavigate();
  useEffect(()=>{
      
      localStorage.removeItem("token");
      navigate("/login");
  })
}
