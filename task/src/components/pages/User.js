import React, {useEffect, useState} from 'react'
import {useFormik} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { AddUser, UpdateUser, GetAllUser, DeleteUser } from '../../redux/UserSlice'

const User = () => {
  
  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(GetAllUser());

  }, [])

  let users = useSelector(data=>data.UserReducer);
  console.log(users)
  

  let { values, handleSubmit, handleChange } = useFormik({
    initialValues : { name : "", email : "", password : "", repassword : "", contact : "", gender : "", city : "" },
    onSubmit : (formData)=>{
        dispatch(AddUser(formData));
    }
  
  })
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-12">
            <button className='btn btn-primary' data-toggle="modal" data-target="#addModal">Add</button>
            <br />
            <table className='table table-dark mt-4'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
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
            <h3>Add New User</h3>
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
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input type='password' name='password' value={values.password} onChange={handleChange} className='form-control'/>
              </div>
              <div className="form-group">
                <label htmlFor="">Re-Password</label>
                <input type='password' name='repassword' value={values.repassword} onChange={handleChange} className='form-control'/>
              </div>
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
                <input type='radio' name='gender' value={values.gender} onChange={handleChange} />Male
                <input type='radio' name='gender' value={values.gender} onChange={handleChange} />Female
              </div>
              
          </div>
          <div className="modal-footer">
            <button className='btn btn-sm btn-danger' data-dismiss="modal">Close</button>
            <button className='btn btn-sm btn-success' type='submit' >Add</button>
          </div>
        </div>
      </div>
      </form>
    </div>


    </>
  )
}

export default User