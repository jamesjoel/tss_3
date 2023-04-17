import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { addStu } from '../redux/Student2Slice'

const Student = () => {
    let disp = useDispatch();
    let { values, handleSubmit, handleChange } = useFormik({
        initialValues : { name : "", age : ""},
        onSubmit : (formData)=>{
            //console.log(formData);
            disp(addStu(formData))
        }
    })
  return (
    <>
        <div className='container my-5'>
            <div className='row'>
                <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    Name
                    <input type='text' name='name' value={values.name} onChange={handleChange} className='form-control' />
                    Age
                    <input type='text' name='age' value={values.age} onChange={handleChange}  className='form-control' />
                    <button type='submit'>Add</button>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Student