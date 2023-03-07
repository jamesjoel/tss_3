import React, {useState} from 'react'

const Setting = () => {
  let [color, setColor] = useState("");
  let [data, setData] = useState(["red", "green", "blue", "yellow"]); 

  let add = ()=>{
    setData([...data, color]);
    setColor("");
  }

  return (
    <>
      <div className='container my-4'>
          <div className='row'>
              <div className="col-md-12">
                <input type="text" value={color} onChange={(event)=>setColor(event.target.value)} />
                <button onClick={add}>OK</button>
                <br/>
                <ol>
                  {
                    data.map((item, index)=>{
                      return(
                        <li key={index}>{item}</li>
                      )
                    })
                  }
                </ol>
              </div>
          </div>
      </div>
    </>
  )
}

export default Setting