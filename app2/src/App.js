import React, { useState } from 'react'

const App = () => {

    let [name, updateName] =  useState("gaurav");
    let [color1, setColor1] = useState("red");
    let demo = ()=>{
        // updateName("hello rohit");
        updateName((curValue)=>{
            return "hello "+curValue;
        })
    }

  
    let hello = (a)=>{
        console.log("******");
        console.log(a);
    }

    let demo2 = (a)=>{
        // setColor1("blue");
        // console.log(a);
        a.preventDefault();
        
    }
    let demo3 = (x)=>{
        x.preventDefault();
    }
  return (
    <>
    <a href='http://google.com' onClick={(event)=>demo3(event)}>Click</a>
    <p onContextMenu={(event)=>demo2(event)} style={{backgroundColor : color1}} onClick={(event)=>hello(event)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos reiciendis labore ratione? Autem at magnam commodi omnis dolorem? Nulla incidunt quae, assumenda mollitia animi dicta consectetur voluptates praesentium ex!</p>
    <div>App</div>
    <h2>{name}</h2>
    <button onDoubleClick={demo}>OK</button>
    
    </>
  )
}

export default App