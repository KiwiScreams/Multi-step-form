import Button from "../button/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../../validation-schema";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function AddOns() {
    const services =
        [
            {
                title: "Online service",
                description: "Access to multiplayer games",
                price: "+$1/mo"
            },
            {
                title: "Larger storage",
                description: "Extra 1TB of cloud save",
                price: "+$2/mo"
            },
            {
                title: "Customizable Profile",
                description: "Custom theme on your profile",
                price: "+$2/mo"
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
                    <div className="services-container flex">
                        {services.map((service, index) => (
                            <div key={index} className={`service flex`}>
                                <div className="flex">
                                    <input type="checkbox" name="service" id="service" />
                                    <div>
                                        <h3>{service.title}</h3>
                                        <span>{service.description}</span>
                                    </div>
                                </div>
                                <span className="price">{service.price}</span>
                            </div>
                        ))}
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