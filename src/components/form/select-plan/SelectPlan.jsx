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

function SelectPlan(props) {
  const navigate = useNavigate();
  const [activePlan, setActivePlan] = useState(() => {
    const storedActivePlan = localStorage.getItem("activePlan");
    return storedActivePlan ? parseInt(storedActivePlan) : 0;
  });
  const [isMonthly, setIsMonthly] = useState(() => {
    const storedIsMonthly = localStorage.getItem("isMonthly");
    return storedIsMonthly ? JSON.parse(storedIsMonthly) : true;
  });
  const [formData, setFormData] = useState({});
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: formData,
  });
  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
      reset(JSON.parse(storedFormData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("activePlan", activePlan.toString());
  }, [activePlan]);

  useEffect(() => {
    localStorage.setItem("isMonthly", JSON.stringify(isMonthly));
  }, [isMonthly]);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };
  const onSubmit = async (data) => {
    console.log(data);
    await localStorage.setItem("formData", JSON.stringify(data));
    navigate("/add-ons");
  };

  const onGoBack = async (data) => {
    navigate("/personal-info");
  };
  const plans = [
    {
      image: plan_1,
      title: "Arcade",
      price: "$9/mo",
      yearly: "$90/yr",
      free: "2 months free",
    },
    {
      image: plan_2,
      title: "Advanced",
      price: "$12/mo",
      yearly: "$120/yr",
      free: "2 months free",
    },
    {
      image: plan_3,
      title: "Pro",
      price: "$15/mo",
      yearly: "$150/yr",
      free: "2 months free",
    },
  ];
  return (
    <>
      <section className="personal-info-section">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="plan-boxes flex">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`plan-box ${activePlan === index ? "active" : ""}`}
                onClick={() => setActivePlan(index)}
              >
                <div className="plan-image">
                  <img src={plan.image} alt="" />
                </div>
                <h3>{plan.title}</h3>
                <span>{isMonthly ? plan.price : plan.yearly}</span>
                {isMonthly ? null : (
                  <span className="yearly-info-free">({plan.free})</span>
                )}
              </div>
            ))}
          </div>
          <div className="toggle-box">
            <div className="toggle-content flex">
              <h3 className={isMonthly ? "active" : ""}>Monthly</h3>
              <div
                className={`toggle ${isMonthly ? "" : "active"}`}
                onClick={handleToggle}
              >
                <div className="toggle-ball"></div>
              </div>
              <h3 className={isMonthly ? "" : "active"}>Yearly</h3>
            </div>
          </div>
          <div className="buttons flex">
            <button className="back-btn" onClick={onGoBack}>
              Go Back
            </button>
            <Button text="Next Step"></Button>
          </div>
        </form>
      </section>
    </>
  );
}
export default SelectPlan;
