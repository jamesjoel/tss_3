import React, {useState} from 'react'
import axios from 'axios';

const Category = () => {
    let [showSpinner, setShowSpinner] = useState(false);
    let [showMsg, setShowMsg] = useState(false);
    let [newCategroy, setNewCategory] = useState({
        name : ""
    })
    let add = async()=>{
        // axios.post("http://localhost:3001/api/category", newCategroy).then(response=>{
        //     console.log(response);
        // })
        setShowSpinner(true);
        setShowMsg(true);

        let response = await axios.post("http://localhost:3001/api/category", newCategroy);
        if(response.data.success==true){
            setShowSpinner(false);
        }
        setNewCategory({ name : ""})
    }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Add New Category</h4>
                    <div className="form-group">
                        <label htmlFor="">Category Name</label>
                        <input type="text" value={newCategroy.name} onChange={(event)=>setNewCategory({name : event.target.value})} className='form-control' />
                    </div>
                    <br />
                    <button onClick={add} className='btn btn-primary'>Add { showSpinner==true ? (<span className='spinner-border spinner-border-sm'></span>) : ''}</button>
                    
                    { showMsg ? (<div className='alert alert-info mt-3'>Data added succesfuly !</div>) : '' }
                </div>
            </div>
        </div>
    </>
  )
}

export default Category