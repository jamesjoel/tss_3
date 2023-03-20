import * as Yup from 'yup';

let signupSchema = Yup.object({
    fullname : Yup.string().required("Insert Your Full Name"),
    email : Yup.string().required("Insert Your Email Id"),
    password : Yup.string().required("Insert Your Password"),
    re_password : Yup.string().required("Insert Your Re-Password"),
    city : Yup.string().required("Select Your City"),
    address : Yup.string().required("Insert Your Address"),
    gender : Yup.string().required("Select Your Gender"),
    contact : Yup.string().required("Insert Your Contact Number"),
})

export default signupSchema;