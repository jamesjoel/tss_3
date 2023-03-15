import React, { useState, useEffect } from 'react'
import axios  from 'axios';

const Products = () => {
  let [allCate, setAllCate] = useState([]);
  let [newProduct, setNewProduct] = useState({
    title : "",
    price : "",
    image : "",
    category : "",
    detail : "",
    discount : ""
  })

  useEffect(()=>{
    let getData=async ()=>{
      let response = await axios.get("http://localhost:3001/api/category");
      setAllCate(response.data);
    }

    getData();
  }, []);

  let add = async ()=>{
    //console.log(newProduct)
    let response = await axios.post("http://localhost:3001/api/product", newProduct)
    console.log(response.data);
  }
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='form-group'>
            <label>Product Title</label>
            <input type="text" value={newProduct.title} className="form-control" onChange={(event)=>setNewProduct({...newProduct, title : event.target.value})} />
          </div>
          <div className='form-group'>
            <label>Product Price</label>
            <input type="text" value={newProduct.price} className="form-control" onChange={(event)=>setNewProduct({...newProduct, price : event.target.value})} />
          </div>
          <div className='form-group'>
            <label>Product Category</label>
            <select className="form-control" onChange={(event)=>setNewProduct({...newProduct, category : event.target.value})} >
              <option value="0">Select</option>
              {
                allCate.map(item=><option key={item._id} value={item.name}>{item.name}</option>)
              }
            </select>
          </div>
          <div className='form-group'>
            <label>Product Detail</label>
            <textarea value={newProduct.detail} className="form-control" onChange={(event)=>setNewProduct({...newProduct, detail : event.target.value})} ></textarea>
          </div>
          <div className='form-group'>
            <label>Product Discount</label>
            <input type="text" className="form-control" value={newProduct.discount} onChange={(event)=>setNewProduct({...newProduct, discount : event.target.value})} />
          </div>
          <br />
          <button onClick={add} className='btn btn-primary'>Add</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products