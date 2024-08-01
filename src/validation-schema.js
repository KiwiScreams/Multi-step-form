import * as yup from "yup"
const validationSchema = yup.object().shape({
    username: yup.string().min(2).max(22).required("This field is required"),
    email: yup.string().email().required("This field is required"),
    phone: yup.string().min(9).max(12).required("This field is required"),
});
export default validationSchema;
