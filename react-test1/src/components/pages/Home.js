import React from 'react'
import Box1 from '../shared/Box1'

const Home = () => {
  let obj = {
    name : "Vijay",
    para : "sdfg sdfg sdfg sdfg sdfg sdfg sdfg sdrg sdfgsergx vbsdfgv",
    src : "/assets/images/1.gif"
  }
  return (
    <>
        <div className="container my-5">
            <div className="row">
              <h3>Home Page</h3>
                <Box1 data={obj}/>
            </div>
        </div>
    </>
  )
}

export default Home