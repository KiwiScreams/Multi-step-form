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
function Summary(props) {
    const navigate = useNavigate();
    console.log(props.formValues);
    const onGoBack = async (data) => {
        navigate("/personal-info");
    };
    return (
        <>
            <section className="personal-info-section">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                <div className="summary-container">
                    <div className="summary-header flex">
                        <div>
                            <h3>
                                Arcade (Monthly)
                            </h3>
                            <button>Change</button>
                        </div>
                        <span>$9/mo</span>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Online service</th>
                                <td>+$1/mo</td>
                            </tr>
                            <tr>
                                <th>Larger storage</th>
                                <td>+$2/mo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex total">
                    <h3>Total (per month)</h3>
                    <span>+$12/mo</span>
                </div>
                <div className="buttons flex">
                    <button className="back-btn" onClick={onGoBack}>Go Back</button>
                    <Button text="Confirm" className="confirm"></Button>
                </div>
            </section>
        </>
    )
}
export default Summary