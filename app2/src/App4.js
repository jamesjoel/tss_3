import React, { useState } from 'react'

const App4 = () => {
    let [color, setColor]=useState("white");
    let demo = ()=>{
        setColor("blue");
    }
    let demo2 = ()=>{
        setColor("yellow");
    }
    let demo3 = ()=>{
        setColor("green");
    }
    let demo4 = ()=>{
        setColor("pink");
    }
    let demo5 = (event)=>{
        console.log("sdfgsdfgsdfgsdfg");
        event.preventDefault();
    }
    let demo6 = (event)=>{
        event.preventDefault();
    }
  return (
    <>
        
        <br/>
        <br/>
        <input type="text" onCopy={(event)=>demo5(event)} value="Hello Indore" />
        <br/>
        <br/>
        <input onFocus={demo3} onBlur={demo4} type="text" onKeyUp={demo2} onKeyPress={demo} style={{backgroundColor : color}}/>
        <br />
        <br />
        <input onPaste={(event)=>demo6(event)} type="password" />
    </>
  )
}

export default App4