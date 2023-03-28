import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllData, deleteData } from '../../../../../services/CategoryService';

const List = () => {
  let navigate = useNavigate();
  let [allCate, setAllCate] = useState([]);

  useEffect(()=>{

    
      if(! localStorage.getItem("_admin_token")){
          navigate("/");
      }
  

    let getData=async ()=>{
      let res = await getAllData();
      setAllCate(res);
    }

    getData();
  }, []);



  let deleteCate = async (obj)=>{
    //console.log(obj)
    let res = await deleteData(obj._id)
    console.log(res);

  }


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <table className='table table-dark'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Category</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {
                  allCate.map((item, index)=>{
                    return(
                      <tr key={item._id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td><button className='btn btn-sm btn-danger' onClick={()=> deleteCate(item)}>Delete</button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default List