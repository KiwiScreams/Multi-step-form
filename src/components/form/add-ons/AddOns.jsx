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
    const services = 
    [
        {
            image: plan_1,
            title: "Arcade",
            price: "$9/mo"
        },
        {
            image: plan_2,
            title: "Advanced",
            price: "$12/mo"
        },
        {
            image: plan_3,
            title: "Pro",
            price: "$15/mo"
        }
    ]
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
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="services-container">
                    <div className="services-container flex">
                        {services.map((service, index) => (
                            <div key={index} className={`plan-box`} onClick={() => setActivePlan(index)}>
                                <div className="plan-image">
                                    <img src={service.image} alt="" />
                                </div>
                                <h3>{service.title}</h3>
                                <span>{service.price}</span>
                            </div>
                        ))}
                    </div>
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