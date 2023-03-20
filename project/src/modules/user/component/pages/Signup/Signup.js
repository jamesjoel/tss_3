import React, { useState } from 'react'
import { useFormik } from 'formik'
import signupSchema from '../../../../../schemas/validation/signup'

let singupForm = {
    fullname : "",
    email : "",
    password : "",
    re_password : "",
    address : "",
    city : "",
    gender : "",
    contact : ""
}

const Signup = () => {

    let { handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues : singupForm,
        validationSchema : signupSchema,
        onSubmit : (data)=>{
            console.log(data);
        }
    });
    

  return (
    <>
        <div className="container" style={{minHeight : "700px"}}>
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card my-4">
                        <div className="card-header">
                            <h4>User Registration</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="">Full Name</label>
                                <input type="text"  name='fullname' onChange={handleChange} placeholder='Full Name' className={'form-control ' + (touched.fullname && errors.fullname ? 'is-invalid' : '')}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" name='email' onChange={handleChange} placeholder='Email' className={'form-control ' + (touched.email && errors.email ? 'is-invalid' : '')}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" name='password' onChange={handleChange} placeholder='Password' className={'form-control ' + (touched.password && errors.password ? 'is-invalid' : '')}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Re-Password</label>
                                <input type="password" name='re_password' onChange={handleChange} placeholder='Re-Password' className={'form-control ' + (touched.re_password && errors.re_password ? 'is-invalid' : '')}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Address</label>
                                <textarea placeholder='Address' name='address' onChange={handleChange}  className={'form-control ' + (touched.address && errors.address ? 'is-invalid' : '')}></textarea>
                            </div>
                            <div className="form-group" name='city' onChange={handleChange}>
                                <label htmlFor="">City</label>
                                <select name='city' className={'form-control ' + (touched.city && errors.city ? 'is-invalid' : '')}>
                                    <option value="">Select</option>
                                    <option value="indore">Indore</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="pune">Pune</option>
                                    <option value="delhi">Delhi</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Gender</label>
                                Male <input type="radio" name='gender'  onChange={handleChange} value="male"/>
                                Female <input type="radio" name='gender' onChange={handleChange} value="female"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Contact Number</label>
                                <input type="text" placeholder='Contact Number' name='contact' onChange={handleChange} className={'form-control ' + (touched.contact && errors.contact ? 'is-invalid' : '')}/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type='submit' className='btn btn-primary'>Signup</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default Signup

/*
    let obj = { name : "rohit", age : 25, city : "indore" }

    let {city} = obj;










*/
