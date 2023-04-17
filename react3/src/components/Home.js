import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteStudent, addStudent } from '../redux/StudentSlice';

const Home = () => {

  // let mydata =useSelector((data)=>{
  //     return data;
  // });


  let mydata = useSelector(data=>data.StudentReducer);
  let disp = useDispatch();

  let del = (obj)=>{
    disp(deleteStudent(obj.id));
  }
  
  let add = ()=>{
    let newobj = { id : 4, name : "rakesh", age : 20 };
    console.log(newobj);
    disp(addStudent(newobj));
  }

  return (
    <>
    <h1>Home</h1>
    <button onClick={add}>Add</button>
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Age</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {
            mydata.map((item, index)=>{
              return(
                <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td><button onClick={()=>del(item)}>Del</button></td>
                </tr>
              )
            })
          }
      </tbody>
    </table>
    </>
  )
}

export default Home