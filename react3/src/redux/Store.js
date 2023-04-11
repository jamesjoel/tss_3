import { configureStore } from '@reduxjs/toolkit'

let data = [
    {
        name : "jaya",
        age : 25,
        city : "indore"
    },
    {
        name : "rohit",
        age : 21,
        city : "mumbai"
    }
]

let Store = configureStore({
    preloadedState : data,
    reducer : (info)=>{
        return info;
    }
});

export default Store;