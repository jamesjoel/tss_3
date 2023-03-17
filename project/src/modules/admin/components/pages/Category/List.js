import React, {useState, useEffect} from 'react'
import axios from 'axios';
const List = () => {
  let [allCate, setAllCate] = useState([]);

  useEffect(()=>{
    let getData=async ()=>{
      let response = await axios.get("http://localhost:3001/api/category");
      setAllCate(response.data);
    }

    getData();
  }, []);

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
                </tr>
              </thead>

              <tbody>
                {
                  allCate.map((item, index)=>{
                    return(
                      <tr key={item._id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
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