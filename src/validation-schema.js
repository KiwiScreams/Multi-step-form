import * as yup from "yup";
const validationSchema = yup.object().shape({
  username: yup.string().min(2).max(22).required("This field is required"),
  email: yup.string().email().required("This field is required"),
  phone: yup.string().min(9).max(12).required("This field is required"),
//   activePlan: yup.string().oneOf(["Arcade", "Advanced", "Pro"], "Invalid plan"),
//   isMonthly: yup.boolean().required("This field is required"),
//   selectedServices: yup
//     .array()
//     .of(
//       yup.object().shape({
//         title: yup.string().required("Title is required"),
//         description: yup.string().required("Description is required"),
//         price: yup.string().required("Price is required"),
//       })
//     )
//     .min(1, "At least one service is required"),
});
export default validationSchema;