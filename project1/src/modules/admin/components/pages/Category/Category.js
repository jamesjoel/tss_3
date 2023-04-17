import React, {useState, useEffect} from 'react'
import { saveData, getData, updateData } from '../../../../../services/CategoryService';
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import cateSchema from '../../../../../schemas/validation/category';


const Category = () => {
    let param = useParams();
    let navigate = useNavigate();

    let [cate, setCate] = useState({ name : ""})
    let [showSpinner, setShowSpinner] = useState(false);
    let [showMsg, setShowMsg] = useState(false);

    useEffect(()=>{
        if(! localStorage.getItem("_admin_token")){
            navigate("/");
        }

        let fetchData = async()=>{
            if(param.id){
                let res = await getData(param.id);
                // console.log(res);
                setCate(res);
            }else{
                setCate({ name:""});
            }
        }
        fetchData();

    }, [param.id])
    
    
    let formik = useFormik({
        initialValues : {name : cate.name ? cate.name : ""},
        validationSchema : cateSchema,
        enableReinitialize : true,
        onSubmit : async (data)=>{
            if(param.id){
                await updateData(param.id, data);
                navigate('/admin/category/list');
            }else{
                await saveData(data);
                navigate('/admin/category/list');
            }
            
            
        }
    })

   
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>{param.id ? 'Update' :'Add New' } Category</h4>
                    <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Category Name</label>
                        <input type="text" value={formik.values.name}  onChange={formik.handleChange} name="name" className={'form-control '+(formik.touched.name && formik.errors.name ? 'is-invalid' : '')} />
                        <small className='text-danger'>{ formik.touched.name && formik.errors.name ? formik.errors.name : ''}</small>
                    </div>
                    <br />
                    <button type='submit' className='btn btn-primary'>{param.id ? 'Update' : 'Add' }</button>
                    
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Category