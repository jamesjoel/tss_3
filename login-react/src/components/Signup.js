import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {doSignup} from '../services/Signup'
import * as Yup from 'yup';

let signupSchema = Yup.object({
    name : Yup.string().required("Insert Your Name"),
    email : Yup.string().email("Email id not valid").required("Insert Your Email id"),
    password : Yup.string().required("Insert Your Password"),
    repassword : Yup.string().oneOf([Yup.ref('password')], 'Password and Re-Password should be same').required("Insert Your Re-Password")
})

const Signup = () => {
    let navigate = useNavigate();
    let { handleSubmit, handleChange, values, errors, touched } = useFormik({
        validationSchema : signupSchema,
        initialValues : {name : "", repassword : "", email : "", password : ""},
        onSubmit : async (formData)=>{
           let result = await doSignup(formData);
           //console.log(result); 

        }
    })
  return (
    <>
    <div className="container my-5">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type='text'  value={values.name} onChange={handleChange} name='name' className={'form-control ' + (errors.name && touched.name ? 'is-invalid' : '')}/>
                    <small className='text-danger'>{errors.name && touched.name ? errors.name : ''}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type='text' value={values.email} onChange={handleChange} name='email' className={'form-control ' + (errors.email && touched.email ? 'is-invalid' : '')}/>
                    <small className='text-danger'>{errors.email && touched.email ? errors.email : ''}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type='password' value={values.password} onChange={handleChange} name='password' className={'form-control ' + (errors.password && touched.password ? 'is-invalid' : '')}/>
                    <small className='text-danger'>{errors.password && touched.password ? errors.password : ''}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">Re-Password</label>
                    <input type='password' value={values.repassword} onChange={handleChange} name='repassword' className={'form-control ' + (errors.repassword && touched.repassword ? 'is-invalid' : '')}/>
                    <small className='text-danger'>{errors.repassword && touched.repassword ? errors.repassword : ''}</small>
                </div>
                <br />
                <input type='submit' value="Signup" className='btn btn-success' />

                
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Signup

