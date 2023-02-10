require("../config/db");
const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
    name : String,
    email : String,
    address : String,
    city : String,
    password : String
})
const StudentModel = mongoose.model("student", StudentSchema);

module.exports = StudentModel;
/*

C   - create (insert)
R   - retrive (fetch/find)
U   - update/edit
D   - delete/remove


const Student = require("....path....");
Student.create
Student.find

*/