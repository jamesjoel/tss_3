import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import cateSchema from '../../../../../schemas/validation/category';

const cateForm = {
    name : ""
}
const Category = () => {
    let navigate = useNavigate();
    let [showSpinner, setShowSpinner] = useState(false);
    let [showMsg, setShowMsg] = useState(false);
    

    let formik = useFormik({
        initialValues : cateForm,
        validationSchema : cateSchema,
        onSubmit : async (data)=>{
            let response = await axios.post("http://localhost:3001/api/category", data);
            navigate('/admin/category/list');
        }
    })

    // let add = async()=>{
    //     // axios.post("http://localhost:3001/api/category", newCategroy).then(response=>{
    //     //     console.log(response);
    //     // })
    //     setShowSpinner(true);
    //     setShowMsg(true);

    //     let response = await axios.post("http://localhost:3001/api/category", newCategroy);
    //     if(response.data.success==true){
    //         setShowSpinner(false);
    //     }
    //     setNewCategory({ name : ""})
    //     // navigate('/admin/category/list');
    // }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Add New Category</h4>
                    <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Category Name</label>
                        <input type="text" onChange={formik.handleChange} name="name" className={'form-control '+(formik.touched.name && formik.errors.name ? 'is-invalid' : '')} />
                        <small className='text-danger'>{ formik.touched.name && formik.errors.name ? formik.errors.name : ''}</small>
                    </div>
                    <br />
                    <button type='submit' className='btn btn-primary'>Add</button>
                    
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Category