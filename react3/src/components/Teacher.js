import React, {useEffect, useState} from 'react'

import { useFormik } from 'formik'
import { AddTeacher, GetTeacher, UpdateTeacher, DeleteTeacher } from '../redux/TeacherSlice'
import { useDispatch, useSelector } from 'react-redux'

const Teacher = () => {
  
  let disp = useDispatch();
  
  useEffect(()=>{
    disp(GetTeacher());
  }, [])

  let teacher = useSelector(data=>data.TeacherReducer);




  let { handleChange, handleSubmit, values } = useFormik({
    initialValues : { name : "", age : "" },
    onSubmit : (formData)=>{
      //console.log(formData)
      disp(AddTeacher(formData));
    }
  });
  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <button data-toggle="modal" data-target="#addModal" className='btn btn-primary'>Add New Teacher</button>
          <br />
          <br />
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
              
            </thead>
            <tbody>
              {
                teacher.map((item, index)=>{
                  return(
                    <tr key={item.id}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
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
        <div className="modal-dialog">
          <form onSubmit={handleSubmit}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Add New Teacher</h3>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input type='text' onChange={handleChange} name='name' value={values.name} className='form-control' />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input type='text' name='age' onChange={handleChange} value={values.age} className='form-control' />
              </div>
            </div>
            <div className="modal-footer">
              <button className='btn btn-danger' data-dismiss="modal">Close</button>
              <button className='btn btn-success' type='submit'>Save</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </>

  )
}



const AddModel = ()=>{
  return(
    <>
      <div className="modal fade" id="addModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Add New Teacher</h3>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className="modal-footer">
              <button className='btn btn-danger' data-dismiss="modal">Close</button>
              <button className='btn btn-success' data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Teacher