import React, {useEffect, useState, useRef} from 'react'
import {useFormik} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { AddUser, UpdateUser, GetAllUser, DeleteUser } from '../../redux/UserSlice'

const User = () => {
  
  let closeBtn = useRef();
  let closeBtn2 = useRef();
  let dispatch = useDispatch();

  let [delUser, setDelUser] = useState({});
  let [user, setUser] = useState({
    _id : "",
    name : "", 
    email : "", 
    password : "", 
    repassword : "", 
    contact : "", 
    gender : "", 
    city : "" 
  });

  useEffect(()=>{
    dispatch(GetAllUser());

  }, [])

  let users = useSelector(data=>data.UserReducer);
  
  

  let { values, handleSubmit, handleChange } = useFormik({
    initialValues : { 
        _id : user._id ? user._id : "",
        name : user._id ? user.name : "", 
        email : user._id ? user.email : "", 
        password : user._id ? user.password : "", 
        repassword : user._id ? user.repassword : "", 
        contact : user._id ? user.contact : "", 
        gender : user._id ? user.gender : "", 
        city : user._id ? user.city : "" 
      },
    enableReinitialize :  true,
    onSubmit : (formData)=>{
      if(user._id){
        
        dispatch(UpdateUser(formData));
        closeBtn.current.click();
      }else{
        dispatch(AddUser(formData));
        closeBtn.current.click();

      }
    }
  
  })


  let askDelete = (obj)=>{
    setDelUser(obj);
  }
  let confDelete = ()=>{
    dispatch(DeleteUser(delUser));
    closeBtn2.current.click();
  }

  let askEdit = (obj)=>{
    setUser(obj);
  }

  let emptyUser = ()=>{
    setUser({
      _id : "",
      name : "", 
      email : "", 
      password : "", 
      repassword : "", 
      contact : "", 
      gender : "", 
      city : "" 
    })
  }

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-12">
            <button className='btn btn-primary' onClick={emptyUser} data-toggle="modal" data-target="#addModal">Add</button>
            <br />
            <table className='table table-dark mt-4'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index)=>{
                    return(
                      <tr key={user._id}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.contact}</td>
                        <td><button onClick={()=>askDelete(user)} className='btn btn-sm btn-danger' data-toggle="modal" data-target="#delModal">Delete</button></td>
                        <td><button onClick={()=>askEdit(user)} className='btn btn-sm btn-info' data-toggle="modal" data-target="#addModal">Edit</button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>


    <div className="modal fade" id="addModal">
      <form onSubmit={handleSubmit}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{ user._id ? 'Update' : 'Add' } User</h3>
          </div>
          <div className="modal-body">
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input autoComplete='off' type='text' name='name' value={values.name} onChange={handleChange} className='form-control'/>
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input type='text' name='email' value={values.email} onChange={handleChange} className='form-control'/>
              </div>
              { user._id =="" ? (
                <>
                  <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input type='password' name='password' value={values.password} onChange={handleChange} className='form-control'/>
                  </div>
                  <div className="form-group">
                  <label htmlFor="">Re-Password</label>
                  <input type='password' name='repassword' value={values.repassword} onChange={handleChange} className='form-control'/>
                  </div>
                </>
              )  : "" }
              <div className="form-group">
                <label htmlFor="">Contact</label>
                <input type='text' name='contact' value={values.contact} onChange={handleChange} className='form-control'/>
              </div>
              <div className="form-group">
                <label htmlFor="">City</label>
                <select name='city' value={values.city} onChange={handleChange} className='form-control'>
                  <option value="">Select</option>
                  <option value="indore">Indore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>

                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Gender</label>
                <input type='radio' name='gender' value="male" onChange={handleChange} />Male
                <input type='radio' name='gender' value="female" onChange={handleChange} />Female
              </div>
              
          </div>
          <div className="modal-footer">
            <button className='btn btn-sm btn-danger' ref={closeBtn} data-dismiss="modal">Close</button>
            <button className='btn btn-sm btn-success' type='submit' >{ user._id ? 'Update' : 'Add' }</button>
          </div>
        </div>
      </div>
      </form>
    </div>

    <div className='modal fade' id='delModal'>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Delete User</h3>
          </div>
          <div className="modal-body">
            <p>Are You sure want to delete <b>{ delUser.name ? delUser.name : '' }</b></p>
          </div>
          <div className="modal-footer">
            <button onClick={confDelete} className="btn btn-sm btn-danger">Delete</button>
            <button ref={closeBtn2}  className="btn btn-sm btn-outline-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default User


// username :  jamessteppingstone
// password : jamesjoel123