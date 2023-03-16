import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

let myForm = {
  name : "",
  age : "",
  fee : ""
}

let myFormSchema = Yup.object({
  name : Yup.string().required("Insert your name"),
  age : Yup.string().required("Insert your age"),
  fee : Yup.string().required("Insert Your Fee")
});

const App2 = () => {

  let formik = useFormik({
    initialValues : myForm,
    validationSchema : myFormSchema,
    onSubmit : (data)=>{
      console.log(data)
    }

  });

  return (
    <>
   <div className='container'>
    <form onSubmit={formik.handleSubmit}>
    <div className="row">
      <div className="col-md-6 offset-md-3">
      Name <input type="text" className={'form-control ' + (formik.touched.name && formik.errors.name ? 'is-invalid' : '')} onChange={formik.handleChange} name="name" />
      <small className='text-danger'>{ formik.touched.name && formik.errors.name ? formik.errors.name : '' }</small>
      <br />
      <br />
      Age <input type="text" className={'form-control '+ (formik.touched.age && formik.errors.age ? 'is-invalid' : '')} onChange={formik.handleChange} name="age" />
      <small className='text-danger'>{ formik.touched.age && formik.errors.age ? formik.errors.age : '' }</small>
      <br />
      <br />
      Fee <input type="text" className={'form-control '+ (formik.touched.fee && formik.errors.fee ? 'is-invalid' : '')} onChange={formik.handleChange} name="fee" />
      <small className='text-danger'>{ formik.touched.fee && formik.errors.fee ? formik.errors.fee : '' }</small>
      <br />
      <br />
    <button type='submit'>Add</button>
      </div>
    </div>
    </form>
   </div>
    </>
  )
}

export default App2