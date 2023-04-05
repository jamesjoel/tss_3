import React from 'react'
import Box1 from '../shared/Box1'

const About = () => {
  let obj = {
    name : "Sakshi",
    para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos provident exercitationem dolore laudantium adipisci, architecto porro numquam nostrum blanditiis distinctio suscipit. Dolorem amet debitis maxime esse placeat dignissimos sed.",
    src : "/assets/images/2.jpg"
  }
  return (
    <>
        <div className="container my-5">
            <div className="row">
                <h3>About Page</h3>
                <Box1 data={obj}/>
            </div>
        </div>
    </>
    
  )
}

export default About