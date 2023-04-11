import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  let data = useSelector(state=>state);
  return (
    <div>
      <h3>{data[1].name}</h3>
      <h3>{data[1].age}</h3>
      <h3>{data[1].city}</h3>
    </div>
  )
}

export default Profile