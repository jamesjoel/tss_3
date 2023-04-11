import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  // let mydata =useSelector((data)=>{
  //     return data;
  // });


  let mydata = useSelector(data=>data);

  return (
    <>
    <div>{ mydata[0].name }</div>
    <div>{ mydata[0].age }</div>
    <div>{ mydata[0].city }</div>
    </>
  )
}

export default Home