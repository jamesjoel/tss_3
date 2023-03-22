import * as Yup from 'yup';

let signupSchema = Yup.object({
    fullname : Yup.string().required("Insert Your Full Name"),
    email : Yup.string().email("Insert valid email id").required("Insert Your Email Id"),
    // password : Yup.string().matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$', 'Password at least one upper letter, one lower letter, one number and a special charator and size will be 8').required("Insert Your Password"),
    password : Yup.string().required("Insert Your Password"),
    re_password : Yup.string().oneOf([Yup.ref('password')], 'Re-Password will be same').required("Insert Your Re-Password"),
    city : Yup.string().required("Select Your City"),
    address : Yup.string().required("Insert Your Address"),
    gender : Yup.string().required("Select Your Gender"),
    contact : Yup.number().typeError("Insert Only Numbers").required("Insert Your Contact Number"),
})

export default signupSchema;