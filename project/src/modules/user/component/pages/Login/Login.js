import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import { Auth } from '../../../../../services/AuthService';

const Login = () => {
    let [msg, setMsg] = useState("");
    let navigate = useNavigate();
    let { handleSubmit, handleChange } = useFormik({
        initialValues : { email : "", password : ""},
        onSubmit : async (data)=>{
            let res = await Auth(data);
            
            if(res.success == false)
            {
                if(res.errType == 1)
                {
                    setMsg("This Email id and Password is Incorrect !");
                }
                if(res.errType == 2)
                {
                    setMsg("This Password is Incorrect !");

                }
            }else{
                let token = res.token;
                localStorage.setItem("token", token);
                navigate("/");
            }
        }
    })
  return (
    <>
    <div className="container" style={{minHeight : "700px"}}>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card my-5">
                    <div className="card-header">
                        <h4>Login</h4>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="">Email/Username</label>
                            <input type="text" name='email' onChange={handleChange} className='form-control'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" name='password' onChange={handleChange} className='form-control'/>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-primary'>Login</button>
                        <p className='text-danger text-center'>{msg}</p>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Login