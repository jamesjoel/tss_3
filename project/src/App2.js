import React, {useState, useEffect} from 'react'

const App2 = () => {
  let [num, setNum] = useState(0);

  

  useEffect(()=>{
    console.log("hello");
  }, [])

  let demo = () =>{
    setNum((x)=>{
      x++;
      return x;
       
    });
  }
  return (
    <>
    <div className='container'>
      <br />
      <br />
        <div>App2</div>
        <h3>{num}</h3>
        <button onClick={demo}>Click</button>
    </div>

    </>
  )
}

export default App2