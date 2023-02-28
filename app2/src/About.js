import React from 'react'

const About = () => {
   let x = true;



   
   
  return (
    <>
        {
            x==true ?  <Demo1/> : <Demo2/>
        }
       
        
    </>
  )
}


let Demo1 = ()=>{
    return(
        <>
            <h1>hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere, eius dolor laudantium a sit ipsa illum culpa ut sint repudiandae consectetur consequuntur praesentium reiciendis nostrum harum blanditiis maxime repellendus.</p>
            <ol>
                <li>Red</li>
                <li>Green</li>
                <li>Blue</li>
            </ol>
        </>
    )
}

let Demo2 = ()=>{
    return(
        <>
            <h2>The Stepping Stone</h2>
            <h2>Hello World</h2>
            <h2>James Joel</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod magni eaque voluptas iure facere tenetur quia cupiditate perferendis odit molestias dignissimos eum voluptates, corporis, quidem ratione dolorum? Ea, dolorum?</p>
        </>
    )
}


export default About