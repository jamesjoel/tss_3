import axios from 'axios';

let getAllProduct = async () =>{
    let res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
}

export { getAllProduct };




/*

var obj = { name : "rohit", age : 25};
var user = { name : "", city : ""};

var name = user.name;

export default obj;
import kuchbhi from ''


export { user };
import { user } from '';

export var { name } = user;

import { name } 





*/