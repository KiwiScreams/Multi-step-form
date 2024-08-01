import { useForm } from "react-hook-form"
import Button from "../button/Button"
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../../validation-schema";
function PersonalInfo() {
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = async (data) => {
        console.log(data);
    };
    return (
        <>
            <section className="personal-info-section">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">Name</label>
                    <input type="text" name="username" id="username" placeholder="e.g. Stephen King" {...register("username")} />
                    {errors.username && errors.username.message}
                    <label htmlFor="username">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" {...register("email")} />
                    {errors.email && errors.email.message}
                    <label htmlFor="username">Phone Number</label>
                    <input type="number" name="phone" id="phone" placeholder="e.g. +1 234 567 890" {...register("phone")} />
                    {errors.phone && errors.phone.message}
                    <Button text="Next Step"></Button>
                </form>
            </section>
        </>
    )
}
export default PersonalInfo