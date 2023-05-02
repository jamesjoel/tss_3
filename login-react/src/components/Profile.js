import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("token")){
      navigate("/");
    }
  }, [])
  return (
    <div>Profile</div>
  )
}

export default Profile