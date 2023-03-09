import React, {useState} from 'react'
import axios from 'axios';

const Products = () => {
  let [user, setUser] = useState({
    name : "",
    aeg : ""
  })
  let [data, setData] = useState([]);

  let add = ()=>{
    // API  -- Application Programming Interface
    axios.post("http://localhost:3001", user).then(result=>{
      console.log(result.data);
    })
  //  console.log(user);
  //  setData([...data, user]);
  //  setUser({name : "", age : ""});
  clear();
  }
  
  let clear = ()=>{
    setUser({name : "", age : ""});

  }

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <button className='btn btn-info' data-toggle="modal" data-target="#addModal">Add</button>
          <br />
          {
            data.length > 0 ? (<table className="table table-dark">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Age</th>
              </tr>

            </thead>

            <tbody>
              {
                data.map((item, index)=>{
                  return(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>) : (<div className='alert alert-warning'>No Data Found</div>)
          }
        </div>
      </div>
    </div>
    <div className='modal fade' id='addModal'>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Add New Student</h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input type="text" value={user.name} onChange={(event)=>setUser({...user, name : event.target.value})} className='form-control' />
            </div>
            <div className="form-group">
              <label htmlFor="">Age</label>
              <input type="text" value={user.age} onChange={(event)=>setUser({...user, age : event.target.value})} className='form-control' />
            </div>
          </div>
          <div className="modal-footer">
            <button className='btn btn-primary' data-dismiss="modal" onClick={add}>Add</button>
            <button className='btn btn-danger' onClick={clear} data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products

