import Button from "../button/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../../validation-schema";
import { useNavigate } from "react-router-dom";
import plan_1 from "../../../assets/images/plan-1.svg"
import plan_2 from "../../../assets/images/plan-2.svg"
import plan_3 from "../../../assets/images/plan-3.svg"
import { useState } from "react";
import { useEffect } from "react";
function Summary() {
    const navigate = useNavigate();
    const onGoBack = async (data) => {
        navigate("/personal-info");
    };
    return (
        <>
            <section className="personal-info-section">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                <div className="buttons flex">
                        <button className="back-btn" onClick={onGoBack}>Go Back</button>
                        <Button text="Confirm" className="confirm"></Button>
                    </div>
            </section>
        </>
    )
}
export default Summary