import React, {useContext} from 'react'
import MyData from './ContextHook'

const Box4 = ()=>{

  let arr = useContext(MyData);
    
    return(
      <div style={{width : "200px", backgroundColor : "#fff", height : "200px"}}>
        <h1>Box 4 Component {arr[1]}</h1>
        
      </div>
    )
  }
  

export default Box4