import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const List = () => {
  let navigate = useNavigate();

  useEffect(()=>{
    if(! localStorage.getItem("_admin_token")){
      navigate("/");
  }
  })
  return (
    <div>List</div>
  )
}

export default List