import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { insertData }  from '../../../../../services/ProductService';
import { getAllData } from '../../../../../services/CategoryService'
import {useFormik} from 'formik';
import proSchema from '../../../../../schemas/validation/product';

let proForm = {
  title : "",
  price : "",
  category : "",
  detail : "",
  discount : ""
}

const Products = () => {

  let navigate = useNavigate();
  let {handleSubmit, handleChange, errors, touched} = useFormik({
    initialValues : proForm,
    validationSchema : proSchema,
    onSubmit : async (data)=>{
      await insertData(data);
      navigate("/admin/products/list");
    }
  })

  let [allCate, setAllCate] = useState([]);
  

  useEffect(()=>{
    if(! localStorage.getItem("_admin_token")){
      navigate("/");
    }

    let getData=async ()=>{
      let response = await getAllData();
      setAllCate(response);
    }

    getData();
  }, []);

  
  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='form-group'>
            <label>Product Title</label>
            <input type="text"  className={'form-control '+(touched.title && errors.title ?'is-invalid' : '')} onChange={handleChange} name='title' />
            <small className='text-danger'>{ touched.title && errors.title ? errors.title : ''}</small>
          </div>
          <div className='form-group'>
            <label>Product Price</label>
            <input type="text"  className={'form-control '+(touched.price && errors.price ?'is-invalid' : '')} onChange={handleChange} name="price" />
            <small className='text-danger'>{ touched.price && errors.price ? errors.price : ''}</small>
          </div>
          <div className='form-group'>
            <label>Product Category</label>
            <select className={'form-control '+(touched.category && errors.category ?'is-invalid' : '')} onChange={handleChange} name='category' >
              <option value="0">Select</option>
              {
                allCate.map(item=><option key={item._id} value={item.name}>{item.name}</option>)
              }
            </select>
            <small className='text-danger'>{ touched.category && errors.category ? errors.category : ''}</small>
          </div>
          <div className='form-group'>
            <label>Product Detail</label>
            <textarea  className={'form-control '+(touched.detail && errors.detail ?'is-invalid' : '')} onChange={handleChange} name='detail' ></textarea>
            <small className='text-danger'>{ touched.detail && errors.detail ? errors.detail : ''}</small>
          </div>
          <div className='form-group'>
            <label>Product Discount</label>
            <input type="text" className={'form-control '+(touched.discount && errors.discount ?'is-invalid' : '')}  onChange={handleChange} name='discount' />
            <small className='text-danger'>{ touched.discount && errors.discount ? errors.discount : ''}</small>

          </div>
          <br />
          <button type='submit' className='btn btn-primary'>Add</button>
        </div>
      </div>
      </form>
    </div>
    </>
  )
}

export default Products