import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../../validation-schema";
import { useNavigate } from "react-router-dom";
import plan_1 from "../../../assets/images/plan-1.svg";
import plan_2 from "../../../assets/images/plan-2.svg";
import plan_3 from "../../../assets/images/plan-3.svg";
import { useState } from "react";
import { useEffect } from "react";
function Summary({ formValues, selectedPlan, selectedServices }) {
  const navigate = useNavigate();
  const [isMonthly, setIsMonthly] = useState(true);
  const [localSelectedServices, setLocalSelectedServices] =
    useState(selectedServices);

  const onGoBack = async (data) => {
    navigate("/add-ons");
  };

  const onConfirm = () => {
    navigate("/success");
    localStorage.clear();
  };

  const [planDuration, setPlanDuration] = useState("");
  useEffect(() => {
    const storedDuration = localStorage.getItem("planDuration");
    setPlanDuration(storedDuration);
  }, []);

  useEffect(() => {
    const storedDuration = localStorage.getItem("planDuration");
    setPlanDuration(storedDuration);
    setIsMonthly(storedDuration === "monthly");
  }, []);

  const handlePlanChange = () => {
    setIsMonthly(!isMonthly);
    setPlanDuration(isMonthly ? "yearly" : "monthly");
  };

  const onChange = () => {
    navigate("/add-ons");
  };
  return (
    <>
      <section className="personal-info-section">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="summary-container">
          <div className="summary-header flex">
            <div>
              <h3 className="name">{selectedPlan?.title}</h3>
              <button onClick={onChange}>Change</button>
            </div>
            <span>${selectedPlan?.price}</span>
          </div>
          <table>
            <tbody>
              {localSelectedServices && localSelectedServices.length > 0 ? (
                localSelectedServices.map((service, index) => (
                  <tr key={index}>
                    <th>{service.name}</th>
                    <td>+${service.price}/mo</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2}>No services selected.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex total">
          <h3 id="total">Total {isMonthly ? "(per month)" : "(per year)"}</h3>
          <span>+${isMonthly ? "12/mo" : "144/yr"}</span>
        </div>
        <div className="buttons flex">
          <button className="back-btn" onClick={onGoBack}>
            Go Back
          </button>
          <button className="confirm btn" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </section>
    </>
  );
}
export default Summary;
