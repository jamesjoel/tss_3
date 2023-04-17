import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserProfileData } from '../../../../../services/ProfileService';


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
        getData();
    })


    let getData = async ()=>{
        let x = localStorage.getItem("token");
        let res = await getUserProfileData(x);
        setUser(res);
    }

  return (
    <>
    <div className="container my-5" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-12">
                <h3>User Profile Page</h3>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                    <table className='table table-dark'>
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td>{user.fullname}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{user.gender}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{user.address}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{user.city}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile
/*
    demo(5).then(x=>{
        demo2(x).then(y=>{
            demo3(y).then(z=>{
                console.log(z);
            })
        })
    })


    hello();
    

    let hello = async ()=>{
        let x = await demo(5);
        let y = await demo2(x);
        let z = await demo3(y);
        console.log(z);
        
    }



*/