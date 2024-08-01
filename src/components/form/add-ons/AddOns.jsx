import Button from "../button/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../../validation-schema";
import { useNavigate } from "react-router-dom";
import plan_1 from "../../../assets/images/plan-1.svg"
import plan_2 from "../../../assets/images/plan-2.svg"
import plan_3 from "../../../assets/images/plan-3.svg"
import { useState } from "react";
function AddOns() {
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log(data);
        navigate("/select-plan");
    };
    const onGoBack = async (data) => {
        navigate("/select-plan");
    };
    return (
        <>
            <section className="personal-info-section">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box">
                        <label htmlFor="username">Name</label>
                        <input type="text" name="username" id="username" placeholder="e.g. Stephen King" {...register("username")} className={errors.username ? "error-input" : ""} />
                        {errors.username && <div className="error-message">{errors.username.message}</div>}
                    </div>
                    <div className="input-box">
                        <label htmlFor="username">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" {...register("email")} {...register("email")}
                            className={errors.email ? "error-input" : ""} />
                        {errors.email && <div className="error-message">{errors.email.message}</div>}
                    </div>
                    <div className="input-box">
                        <label htmlFor="username">Phone Number</label>
                        <input type="number" name="phone" id="phone" placeholder="e.g. +1 234 567 890" {...register("phone")} {...register("phone")}
                            className={errors.phone ? "error-input" : ""} />
                        {errors.phone && <div className="error-message">{errors.phone.message}</div>}
                    </div>
                    <div className="buttons flex">
                        <button className="back-btn" onClick={onGoBack}>Go Back</button>
                        <Button text="Next Step"></Button>
                    </div>
                </form>
            </section>
        </>
    )
}
export default AddOns