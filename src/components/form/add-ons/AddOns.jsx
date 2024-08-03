import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../../validation-schema";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function AddOns({ setSelectedServices, selectedServices }) {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [localSelectedServices, setLocalSelectedServices] = useState(
    JSON.parse(localStorage.getItem("selectedServices")) || []
  );
  const location = useLocation();
  const isMonthly = location.state.isMonthly;
  if(isMonthly)
  {

  }
  else
  {

  }
  useEffect(() => {
    localStorage.setItem(
      "selectedServices",
      JSON.stringify(localSelectedServices)
    );
  }, [localSelectedServices]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const service = services.find((service) => service.title === name);
    if (checked) {
      setSelectedServices((prevServices) => [...prevServices, service]);
    } else {
      setSelectedServices((prevServices) =>
        prevServices.filter((prevService) => prevService.title !== name)
      );
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    navigate("/summary");
  };

  const onGoBack = () => {
    navigate("/select-plan");
  };
  const services = [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      price: 1,
      yearly: 10
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
      yearly: 20
    },
    {
      title: "Customizable Profile",
      description: "Custom theme on your profile",
      price: 2,
      yearly: 20
    },
  ];
  return (
    <>
      <section className="personal-info-section">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {selectedServices.length === 0 && (
            <span className="error-message-select">
              Please select at least one plan
            </span>
          )}
          <div className="services-container flex">
            {services.map((service, index) => (
              <div key={index} className={`service flex`}>
                <div className="flex">
                  <input
                    type="checkbox"
                    name={service.title}
                    id={service.title}
                    checked={selectedServices.some(
                      (selectedService) =>
                        selectedService.title === service.title
                    )}
                    onChange={handleCheckboxChange}
                  />
                  <div>
                    <h3>{service.title}</h3>
                    <span>{service.description}</span>
                  </div>
                </div>
                <span className="price">{isMonthly ? `$${service.price}/mo` : `$${service.yearly}/yr`}</span>
              </div>
            ))}
          </div>
          <div className="buttons flex">
            <button className="back-btn" type="button" onClick={onGoBack}>
              Go Back
            </button>
            <button disabled={selectedServices.length === 0} className="btn">
              Next Step
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default AddOns;
