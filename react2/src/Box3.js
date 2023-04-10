import React, {useContext} from 'react'
import MyData from './ContextHook'
import Box4 from './Box4'
const Box3 = ()=>{

  let data = useContext(MyData);

    return(
      <div style={{width : "400px", backgroundColor : "#FF5040", height : "400px"}}>
        {data[1]}
        <Box4 />
      </div>
    )
  }

export default Box3