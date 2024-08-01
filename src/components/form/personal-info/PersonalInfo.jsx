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
                    <div className="input-box">
                        <label htmlFor="username">Name</label>
                        <input type="text" name="username" id="username" placeholder="e.g. Stephen King" {...register("username")} />
                        {errors.username && <div className="error-message">{errors.username.message}</div>}
                    </div>
                    <div className="input-box">
                        <label htmlFor="username">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" {...register("email")} />
                        {errors.email && <div className="error-message">{errors.email.message}</div>}
                    </div>
                    <div className="input-box">
                        <label htmlFor="username">Phone Number</label>
                        <input type="number" name="phone" id="phone" placeholder="e.g. +1 234 567 890" {...register("phone")} />
                        {errors.phone && <div className="error-message">{errors.phone.message}</div>}
                    </div>
                    <Button text="Next Step"></Button>
                </form>
            </section>
        </>
    )
}
export default PersonalInfo