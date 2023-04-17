import React from 'react'

const About = () => {

  let demo = ()=>{
    console.log("welcome")
    test();
  }

  let test = ()=>{
    console.log("*************");
  }
  return (
    <>
    <div className="container" style={{minHeight : "700px"}}>
        <h3>About Page</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde placeat eius rerum officia perferendis fugiat sint voluptas temporibus, rem incidunt nobis ipsa soluta nemo? Quas provident ea ipsam! Similique, error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, libero nihil! Alias at cum libero, voluptate explicabo blanditiis rerum voluptatum iure error sunt ducimus iusto, sed esse veritatis assumenda ipsa.</p>
        <button className="btn btn-info"  onClick={demo}>ok</button>
    </div>
    </>
  )

}

export default About