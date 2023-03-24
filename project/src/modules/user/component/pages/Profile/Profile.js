import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {

    let [user, setUser] =useState({
        fullname : "",
        email : "",
        address : "",
        city : "",
        gender : "",
        contact : ""
    });

    let navigate = useNavigate();

    useEffect(()=>{

        if(! localStorage.getItem("token")){
            navigate("/login");
        }

        let x = localStorage.getItem("token");
        axios.get("http://localhost:3001/api/profile?token="+x).then(response=>{
            // console.log(response.data);
            setUser(response.data);
        });
        



    })


  return (
    <>
    <div className="container my-5" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-12">
                <h3>User Profile Page</h3>
                <p>{user.fullname}</p>
                <p>{user.email}</p>
                <p>{user.address}</p>
                <p>{user.city}</p>
                <p>{user.gender}</p>
                <p>{user.contact}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile