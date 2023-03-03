import React, { useState } from 'react'

const App2 = () => {
    let [name, setName] = useState("rohit");
    let [w, setW] = useState(200);
    let [color, setColor] = useState("red");
    let demo = ()=>{
        setName("gaurav")
        setColor("blue");
    }
    let demo2 = ()=>{
        setName("rohit")
        setColor("red");
        setW(200);
    }
    let demo3 = ()=>{
        setW((cur)=>{
            cur++;
            return cur;
        })
    }
  return (
    <>
        <h1>{name}</h1>
        <div onMouseMove={demo3} onMouseOut={demo2} onMouseOver={demo} style={{backgroundColor : color, height : w+'px', width : w+'px'}}></div>
    </>
  )
}

export default App2