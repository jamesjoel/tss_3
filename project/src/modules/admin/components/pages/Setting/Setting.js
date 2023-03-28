import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Setting = () => {
  let navigate = useNavigate();
  let [color, setColor] = useState("");
  let [data, setData] = useState(["red", "green", "blue", "yellow"]); 

  useEffect(()=>{
    if(! localStorage.getItem("_admin_token")){
      navigate("/");
  }
  })

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