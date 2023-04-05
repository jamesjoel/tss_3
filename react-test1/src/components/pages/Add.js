import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import { insertData, getData, updateData } from '../../services/TeacherService'
import * as Yup from 'yup';

let userSchema = Yup.object({
  name : Yup.string().required("Insert Your Name"),
  age : Yup.string().required("Insert Your Age"),
  city : Yup.string().required("Select Your City")
})

const Add = () => {

  let [teacher, setTeacher]= useState({ name : "", age : "", city : ""});
  let param = useParams();
  let navigate = useNavigate();
  useEffect(()=>{
    fetchData();
  }, [param.id])


  let { handleChange, handleSubmit, errors, values, touched} = useFormik({
    initialValues : {name : teacher.name ? teacher.name : "", age : teacher.age ? teacher.age : "", city: teacher.city ? teacher.city : ""},
    validationSchema : userSchema,
    enableReinitialize : true,
    onSubmit:async (data)=>{
      if(param.id){

        await updateData(param.id, data);
        navigate("/list");
      }else{
        
        await insertData(data);
        navigate("/list");
      }
    }
  })

  

  let fetchData = async ()=>{
    if(param.id){
      let res = await getData(param.id);
      
      setTeacher(res);

    }else{
      setTeacher({ name : "", age : "", city : "" })
    }
  }

  return (
    <>
      <div className="container my-4">
        <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
              <h3>{param.id ? 'Update' : 'Add New'} Tacher</h3>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' name='name' onChange={handleChange} value={values.name} className={'form-control ' +(touched.name && errors.name ? 'is-invalid' : '') } />
                <small className='text-danger'>{ touched.name && errors.name ? errors.name : '' }</small>
              </div>
              <div className='form-group'>
                <label>Age</label>
                <input type='text'  name='age' onChange={handleChange} value={values.age} className={'form-control ' +(touched.age && errors.age ? 'is-invalid' : '') } />
                <small className='text-danger'>{ touched.age && errors.age ? errors.age : '' }</small>
              </div>
              <div className='form-group'>
                <label>City</label>
                <select className={'form-control ' +(touched.city && errors.city ? 'is-invalid' : '') }  name='city' onChange={handleChange} value={values.city}>
                  <option value="">Select</option>
                  <option value="indore">Indore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="delhi">Delhi</option>
                </select>
                <small className='text-danger'>{ touched.city && errors.city ? errors.city : '' }</small>
              </div>
              <br />
              <button className='btn btn-primary' type='submit'>{param.id ? 'Update' : 'Add'}</button>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default Add;