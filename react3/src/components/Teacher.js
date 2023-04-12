import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delTecher } from '../redux/TeacherSlice'

const Teacher = () => {

  let dispatch = useDispatch();
  let [city, setCity] = useState("");
  let del = ()=>{
    dispatch(delTecher(city));
  }
  return (
    <div>
      <br />
      <br />
      <br />
      Delete Teacher by City
      <select onChange={(e)=>setCity(e.target.value)}>
        <option>Select</option>
        <option>indore</option>
        <option>mumbai</option>
        <option>bhopal</option>
      </select>
      <button onClick={del}>delete</button>
    </div>
  )
}

export default Teacher