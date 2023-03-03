import React, { useState } from 'react'

const App3 = () => {
    let [left, setLeft] = useState(0);
    let [top, setTop] = useState(0);
    let demo = ()=>{
        let x = Math.random()*600;
        let y = Math.floor(x);
        let a = Math.random()*600;
        let b = Math.floor(a);

        setLeft(y);
        setTop(b);
        
    }
  return (
    <>
    <div onMouseMove={demo} style={{ marginLeft : left+"px", marginTop : top+'px', backgroundColor : '#405060', height : '150px', width : '150px', borderRadius : '100px'}}></div>
    </>
  )
}

export default App3