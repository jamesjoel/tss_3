import React, {useState, useEffect} from 'react';
import { getAllData, deleteData } from '../../services/TeacherService'

const List = () => {

  let [teacher, setTeacher] = useState([]);
  let [teach, setTeach] = useState({});
  
  let getTeacher = async()=>{
    let res = await getAllData();
    setTeacher(res);
  }

  useEffect(()=>{
    getTeacher();
  }, [])


  let askDelete = (obj)=>{
    setTeach(obj);
  }
  let confDelete = async ()=>{
    await deleteData(teach.id);
    setTeacher((cur)=>{
        return cur.filter(item=> item.id != teach.id)
    })
  }

  return (
    <>
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                teacher.map((t, i)=>{
                  return(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{t.name}</td>
                      <td>{t.age}</td>
                      <td>{t.city}</td>
                      <td><button onClick={()=>askDelete(t)} data-toggle='modal' data-target='#delModal' className='btn btn-sm btn-danger'>Delete</button></td>
                      
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <div className="modal fade" id="delModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Delete Teacher</h3>
          </div>
          <div className="modal-body">
            <p>Are you sure want to delete <b>{ teach ? teach.name : '' } </b>?</p>
          </div>
          <div className="modal-footer">
            <button data-dismiss="modal" className='btn btn-danger' onClick={confDelete}>Delete</button>
            <button data-dismiss="modal" className='btn btn-info'>Cancle</button>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default List;


/*
let x = 40;
let arr = [5, 7, 14, 6, 40, 25, 9, 3];

let newarr = arr.filter(item=>{
                return item != x
            })



let [x, setX] = useState(100);

setX((cur)=>{
  return cur+5;
});





*/