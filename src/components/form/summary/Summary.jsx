import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../../validation-schema";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Summary({ formValues, selectedPlan, selectedServices }) {
  const navigate = useNavigate();
  const [isMonthly, setIsMonthly] = useState(true);
  const [localSelectedServices, setLocalSelectedServices] =
    useState(selectedServices);
  const onGoBack = async (data) => {
    navigate("/add-ons", { state: { isMonthly } });
  };

  const onConfirm = () => {
    navigate("/success");
    localStorage.clear();
    setIsConfirmed(true);
  };
  const totalServicesCost = localSelectedServices.reduce((acc, service) => {
    return acc + service.price;
  }, 0);
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
    navigate("/select-plan");
  };
  return (
    <>
      <section className="personal-info-section">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="summary-container">
          <div className="summary-header flex">
            <div>
              <h3 className="name">{selectedPlan?.title ?? 'Arcade'}</h3>
              <button onClick={onChange}>Change</button>
            </div>
            <span>${isMonthly ? selectedPlan?.price : selectedPlan?.yearly}</span>
          </div>
          <table>
            <tbody>
              {localSelectedServices && localSelectedServices.length > 0 ? (
                localSelectedServices.map((service, index) => (
                  <tr key={index}>
                    <th>{service.title.toString()}</th>
                    <td>{service.price}</td>
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
          <span>${totalServicesCost + selectedPlan?.price}</span>
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
