import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { insertData } from '../../services/TeacherService'

const Add = () => {

  let navigate = useNavigate();
  let { handleChange, handleSubmit, errors, values, touched} = useFormik({
    initialValues : {name : "", age : "", city:""},
    onSubmit:async (data)=>{
        await insertData(data);
        navigate("/list");
    }
  })

  return (
    <>
      <div className="container my-4">
        <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
              <h3>Add New Tacher</h3>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' name='name' onChange={handleChange} value={values.name} className='form-control' />
              </div>
              <div className='form-group'>
                <label>Age</label>
                <input type='text'  name='age' onChange={handleChange} value={values.age} className='form-control' />
              </div>
              <div className='form-group'>
                <label>City</label>
                <select className='form-control'  name='city' onChange={handleChange} value={values.city}>
                  <option value="">Select</option>
                  <option value="indore">Indore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
              <br />
              <button className='btn btn-primary' type='submit'>Add</button>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default Add;