import React, { useState } from 'react'
import './App2.css';

const App2 = () => {
  return (
    <Box1 />
  )
}

const Box1 = ()=>{
   let [name, setName] = useState("gaurav");

    let change = (x)=>{
        setName(x);
    }

    return(
        <>
            <div className='box1'>
                <h1>{name}</h1>
                <Box2 change={change}/>

            </div>
        </>
    )
}

const Box2 = (props)=>{
    //let a = props.name;
    
    return(
        <>
            <div className='box2'>
                <br />
                <button onClick={()=>props.change("amar")}>OK</button>
            </div>
        </>
    )
}


export default App2