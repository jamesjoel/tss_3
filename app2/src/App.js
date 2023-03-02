import { useState } from 'react'
let App = ()=>{
   
    let [num, setNum] = useState(1);
   
    let demo = ()=>{
       
        setNum((x)=>{
             x++;
            return x;
        })
    }

    let demo2 = ()=>{
        setNum((x)=>{
            x--;
            return x;
        })
    }
   
    return(
        <>
            <h3>Hooks in React</h3>
            <h1>{num}</h1>
            <button onClick={demo}>Inc</button>
            <button onClick={demo2}>Dec</button>
        </>
    )
}

export default App;