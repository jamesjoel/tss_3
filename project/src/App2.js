import React, { useState, useEffect } from 'react'

const App2 = () => {
  let [num, setNum] = useState(0);
  let [num2, setNum2] = useState(0);

  
  useEffect(()=>{
    console.log("hello")
  }, []);


  
  return (
    <>
      <div>App2</div>
      <h2>{num}</h2>
      <button onClick={()=>setNum(num+1)}>OK</button>
      <br />
      <h3>{num2}</h3>
      <button onClick={()=>setNum2(num2+1)}>OK</button>
    </>
  )
}

export default App2