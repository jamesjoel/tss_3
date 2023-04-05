import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';

const App3 = () => {

    let { handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues : {
            name : "",
            age : "",
            image : ""
        },
        onSubmit : async (data)=>{
            
            let fm = new FormData(); // we are create our form by JS

            // fm.append("name", data.name);
            // fm.append("age", data.age)

            // fm.append("image", data.image)


            for(let x in data)
            {
                fm.append(x, data[x])
            }


            let result = await axios.post("http://localhost:3001/api/upload", fm);
            
        }
    })
  return (
    <>
        <form onSubmit={handleSubmit}>
            Name : <input type='text' name='name' onChange={handleChange}/>
            <br />
            <br />
            Age : <input type='text' name='age' onChange={handleChange}/>
            <br />
            <br />
            Image : <input type='file' name='image' onChange={(e)=>setFieldValue("image", e.target.files[0])}/>
            <br />
            <br />
            <button type='submit'>Save</button>
        </form>
    </>
  )
}

export default App3



/*

let user = { name : "rohit", age : 25, city : "indore" };



for(let x in user)
{
    console.log(user[x]);
}





*/