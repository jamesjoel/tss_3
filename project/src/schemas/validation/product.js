import * as Yup from 'yup';

 let proSchema = Yup.object({
    title : Yup.string().required("Insert Product Title"),
    price : Yup.string().required("Insert Product Price"),
    category : Yup.string().required("Select Product Category"),
    detail : Yup.string().required("Insert Product Detail"),
  discount : Yup.string().required("Insert Product Discount")
})

export default proSchema;