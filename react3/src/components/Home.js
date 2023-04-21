import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteStudent, addStudent, updateStudent } from '../redux/StudentSlice';

const Home = () => {

  let [stu, setStu] = useState({ id : "", name : "", age : "" })

  // let mydata =useSelector((data)=>{
  //     return data;
  // });


  let mydata = useSelector(data=>data.StudentReducer);
  let disp = useDispatch();

  let del = (obj)=>{
    disp(deleteStudent(obj.id));
  }
  
  let add = ()=>{
    
    if(stu.id){
      disp(updateStudent(stu));

    }else{

      disp(addStudent(stu));
    }
    
    setStu({ name : "", age : "", id : ""})
  }


  let update = (obj)=>{
    setStu(obj);
  }
  return (
    <>
    <h1>Home</h1>
    Name : <input type='text' value={stu.name} onChange={(e)=>setStu({...stu, name : e.target.value})}/>
    <br />
    <br />
    Age : <input type='text' value={stu.age} onChange={(e)=>setStu({...stu, age : e.target.value})}/>
    <br />
    <button onClick={add}>Add</button>
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Age</th>
          <th>Delete</th>
          <th>Update</th>
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
                  <td><button onClick={()=>update(item)}>Update</button></td>
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