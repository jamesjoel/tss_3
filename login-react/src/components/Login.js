import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Auth } from '../services/AuthService'
const Login = () => {
    let [err, setErr] = useState("");
    let { handleSubmit, handleChange, values } = useFormik({
        initialValues : { email : "", password : ""},
        onSubmit : async (formData)=>{
            try{
                let response = await Auth(formData);
            }catch(err){
                let response = err.response.data;
                
                setErr(response.type);
                
            }
            
        }
    })

   return (
    <>
    <div className="container my-5">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type='text' value={values.email} onChange={handleChange} name='email' className='form-control'/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type='password' value={values.password} onChange={handleChange} name='password' className='form-control'/>
                </div>
                <br />
                <input type='submit' value="Login" className='btn btn-success' />

                <p className='text-danger text-center'>
                    {
                        err==1 ? 'Email and Password is incorrect' : ''
                    }
                    {
                        err==2 ? 'Password is incorrect' : ''
                    }
                </p>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Login