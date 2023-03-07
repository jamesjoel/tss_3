import React, { useState } from 'react'

const Products = () => {
  let [newUser, setNewUser] = useState({
    name : "",
    age : "",
    city : "",
    gender : ""
  })
  let [user, setUser] = useState([
    {
      id : 1,
      name : "rohit",
      age : 25,
      city : "indore",
      gender : "male"
    },
    {
      id : 2,
      name : "amar",
      age : 21,
      city : "mumbai",
      gender : "male"
    },
    {
      id : 3,
      name : "nidhi",
      age : 23,
      city : "pune",
      gender : "female"
    }
  ]);

  let add = ()=>{
    // console.log(newUser);
    setUser([...user, newUser]);
  }

  return (
    <>
    <div className="container my-4">
      <div className="row">
          <div className="col-md-12">
            <button className='btn btn-info' data-toggle="modal" data-target="#addModal">Add</button>
            <table className='table table-dark'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((u, i)=>{
                      return(
                        <tr key={i}>
                          <td>{i+1}</td>
                          <td>{u.name}</td>
                          <td>{u.age}</td>
                          <td>{u.city}</td>
                          <td>{u.gender}</td>
                        </tr>
                      )
                  })
                }
              </tbody>
            </table>
          </div>
      </div>
    </div>
    
              <div id='addModal' className='modal fade'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h4>Add New Student</h4>
                    </div>
                    <div className='modal-body'>
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" value={newUser.name} onChange={(event)=>setNewUser({...newUser, name : event.target.value})} className='form-control' />
                      </div>
                      <div className="form-group">
                        <label>Age</label>
                        <input type="text" value={newUser.age} onChange={(event)=>setNewUser({...newUser, age : event.target.value})} className='form-control' />
                      </div>
                      <div className="form-group">
                        <label>City</label>
                        <select className='form-control' onChange={(event)=>setNewUser({...newUser, city : event.target.value})}>
                          <option>select</option>
                          <option value="indore">indore</option>
                          <option value="mumbai">mumbai</option>
                          <option value="pune">pune</option>
                          <option value="delhi">delhi</option>
                          <option value="bhopal">bhopal</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Gender</label>
                        Male <input type="radio" name='gender' value="male" onChange={(event)=>setNewUser({...newUser, gender : event.target.value})}/>
                        Female <input type="radio" name='gender'value="female" onChange={(event)=>setNewUser({...newUser, gender : event.target.value})}/>
                      </div>
                    </div>
                    <div className='modal-footer'>
                      <button className='btn btn-primary' data-dismiss="modal" onClick={add}>Add</button>
                    </div>
                  </div>
                </div>
              </div>


    </>
    




  )
}

export default Products