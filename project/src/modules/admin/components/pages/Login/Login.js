import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../../../../../services/AdminAuthService'
import { useDispatch } from 'react-redux'
import { createToken } from '../../../../../redux/AdminAuthReducer'

const Login = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();

    useEffect(()=>{
        if(localStorage.getItem("_admin_token")){
            navigate("/admin/dashboard");
        }
    })

    let [msg, setMsg] = useState("");

    let { handleChange, handleSubmit } = useFormik({
        initialValues : {username : "", password : ""},
        onSubmit:async (data)=>{
            let res = await Auth(data)
          
            if(res.success == false){
                if(res.errType == 1){
                    setMsg("This Username and Password is Incorrect");
                }
                if(res.errType == 2){
                    setMsg("This Password is Incorrect");
                }
            }
            else{
                console.log("***************");
                dispatch(createToken(res.token));
                localStorage.setItem("_admin_token", res.token);
                navigate("/admin/dashboard");
            }
        }
    })

  return (
    <>
    <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header bg-dark ">
                        <h4 className='text-light'>Administrator Login</h4>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="">Username</label>
                            <input type="text" name="username" onChange={handleChange} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" onChange={handleChange} className='form-control' />
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