import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate();

  useEffect(()=>{
    if(! localStorage.getItem("_admin_token")){
      navigate("/");
    }
  })

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard