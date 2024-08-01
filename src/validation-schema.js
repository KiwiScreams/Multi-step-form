import * as yup from "yup"
const validationSchema = yup.object().shape({
    username: yup.string().min(2).max(22).required(),
    email: yup.string().email().required(),
    phone: yup.number().min(9).max(12).required(),
});
export default validationSchema;
