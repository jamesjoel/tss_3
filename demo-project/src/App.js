import React, {useEffect, useState} from 'react'
import { Routes, Route, NavLink, useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { insertData, removeData, getAllData, getData, updateData } from './services/DemoService'

const App = () => {
  return (
    <>
      <NavLink to="">Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="demo">Demo</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="list">List</NavLink>

      <Routes>
        <Route path='' element={<Home />} />
        <Route path='demo' element={<Demo />} />
        <Route path='demo/:id' element={<Demo />} />
        <Route path='list' element={<List />} />

      </Routes>
    </>
  )
}


const Home = ()=>{
  return(
    <h1>Home</h1>
  )
}


const Demo = ()=>{
  let param = useParams();
  let [user, setUser] = useState({ name : "", age : ""});

  useEffect(()=>{
    if(param.id){
      async function fetchData(){
        const res = await getData(param.id);
        
        setUser(res);
      }
      fetchData();
    }
  }, [])

  let navigate = useNavigate();
  let { handleSubmit, handleChange, values } = useFormik({
    initialValues : { name : "", age : ""},
    values : user,
    enableReinitialize : true,
    onSubmit : async (formData)=>{
      let res = await insertData(formData);
      navigate("/list");
    }
  })

  

  return(
    <>
      <h1>Demo</h1>
      <form onSubmit={handleSubmit}>
        Full Name :  <input type="text" value={values.name}  name='name' onChange={handleChange} />
        <br />
        <br />
        Age :  <input type="text" name='age' value={values.age}  onChange={handleChange} />
        <br />
        <br />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}
const List = ()=>{
  let navigate = useNavigate();
  let [allData, setAllData] = useState([]);
  
  
  useEffect(()=>{
    receiveData();
  },[])

  let receiveData = async()=>{
    let arr =await getAllData();
    setAllData(arr);
  }
  
  let del = async (item)=>{
    let res = await removeData(item._id);
    setAllData((currentData)=>{
      return currentData.filter(x=> x._id != item._id);
    });
  }

  let edit = (obj)=>{
    navigate("/demo/"+obj._id);
  }

  return(
    <>
      <h1>List</h1>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            allData.map((item, index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td><button onClick={()=>del(item)}>Delete</button></td>
                  <td><button onClick={()=>edit(item)}>Edit</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App