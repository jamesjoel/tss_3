import * as Yup from 'yup';

let cateSchema = Yup.object({
    name : Yup.string().required("Insert Product Category")
})

export default cateSchema;