import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import signupSchema from '../../../../../schemas/validation/signup'
import { Insert } from '../../../../../services/UserService'

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

    let navigate = useNavigate();
    let [type, setType] = useState('password');

    let { handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues : singupForm,
        validationSchema : signupSchema,
        onSubmit : async (data)=>{
                      // console.log(data);
            let res = await Insert(data);
            navigate("/");
        }
        
    });
    

    let showPass = ()=>{
        if(type=="password")
            setType("text");
        else
            setType("password");
    }

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
                                <input autoComplete='off' type="text"  name='fullname' onChange={handleChange} placeholder='Full Name' className={'form-control ' + (touched.fullname && errors.fullname ? 'is-invalid' : '')}/>
                                <small className='text-danger'>{ touched.fullname && errors.fullname ? errors.fullname : '' }</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input autoComplete='off' type="text" name='email' onChange={handleChange} placeholder='Email' className={'form-control ' + (touched.email && errors.email ? 'is-invalid' : '')}/>
                                <small className='text-danger'>{ touched.email && errors.email ? errors.email : '' }</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <div className='input-group'>

                                    <input autoComplete='off' type={type} name='password' onChange={handleChange} placeholder='Password' className={'form-control ' + (touched.password && errors.password ? 'is-invalid' : '')}/>
                                    <div className='input-group-append'>
                                        <button onClick={showPass} type='button' className='btn btn-dark'><i className="fa fa-eye" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                                <small className='text-danger'>{ touched.password && errors.password ? errors.password : '' }</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Re-Password</label>
                                <input autoComplete='off' type="password" name='re_password' onChange={handleChange} placeholder='Re-Password' className={'form-control ' + (touched.re_password && errors.re_password ? 'is-invalid' : '')}/>
                                <small className='text-danger'>{ touched.re_password && errors.re_password ? errors.re_password : '' }</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Address</label>
                                <textarea placeholder='Address' name='address' onChange={handleChange}  className={'form-control ' + (touched.address && errors.address ? 'is-invalid' : '')}></textarea>
                                <small className='text-danger'>{ touched.address && errors.address ? errors.address : '' }</small>
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
                                <small className='text-danger'>{ touched.city && errors.city ? errors.city : '' }</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Gender</label>
                                Male <input type="radio" name='gender'  onChange={handleChange} value="male"/>
                                Female <input type="radio" name='gender' onChange={handleChange} value="female"/>
                                <br />
                                <small className='text-danger'>{ touched.gender && errors.gender ? errors.gender : '' }</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Contact Number</label>
                                <input autoComplete='off' type="text" placeholder='Contact Number' name='contact' onChange={handleChange} className={'form-control ' + (touched.contact && errors.contact ? 'is-invalid' : '')}/>
                                <small className='text-danger'>{ touched.contact && errors.contact ? errors.contact : '' }</small>
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
