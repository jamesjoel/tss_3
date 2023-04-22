import React, {useEffect, useState, useRef} from 'react'


import { useFormik } from 'formik'
import { AddTeacher, GetTeacher, UpdateTeacher, DeleteTeacher } from '../redux/TeacherSlice'
import { useDispatch, useSelector } from 'react-redux'

const Teacher = () => {
  let [newteacher, setNewTeacher] = useState({ name : "", age : "", id:""})
  let closeBtn = useRef();
  let x = useRef();
  let y = useRef();


  
  let disp = useDispatch();
  
  useEffect(()=>{
    disp(GetTeacher());
  }, [])

  let teacher = useSelector(data=>data.TeacherReducer);




  let { handleChange, handleSubmit, values } = useFormik({
    initialValues : { name : newteacher.name ? newteacher.name : "", age : newteacher.age ? newteacher.age : "", id : newteacher.id ? newteacher.id : "" },
    enableReinitialize : true,
    onSubmit : (formData)=>{
      //console.log(formData)
    if(newteacher.id){
      disp(UpdateTeacher(formData));
      closeBtn.current.click();
    }else{

      disp(AddTeacher(formData));
      closeBtn.current.click();
    }
      
    }
  });


  let DeleteTeac = (obj)=>{
    console.log(obj);
    disp(DeleteTeacher(obj));
  }

  let askUpdate = (obj)=>{
    setNewTeacher(obj);
  }

  return (
    <>

    {/* <h2 onClick={()=>y.current.click()}>click me</h2>
    <input type='file' ref={y} style={{display : 'none'}}/> */}
    {/* <h1 ref={x}>hello</h1>
    <button onClick={()=>console.log(x.current.innerHTML)}>ok</button> */}
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
                <th>Delete</th>
                <th>Update</th>
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
                      <td><button className='btn btn-danger btn-sm' onClick={()=>DeleteTeac(item)}>Del</button></td>
                      <td><button className='btn btn-info btn-sm' onClick={()=>askUpdate(item)} data-toggle="modal" data-target="#addModal">Update</button></td>
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
              <button className='btn btn-danger' ref={closeBtn} data-dismiss="modal">Close</button>
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