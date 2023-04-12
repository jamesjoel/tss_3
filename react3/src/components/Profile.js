import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  let data = useSelector(state=>state);
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile