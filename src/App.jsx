import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PersonalInfo from "./components/form/personal-info/PersonalInfo"
import SelectPlan from "./components/form/select-plan/SelectPlan"
import AddOns from "./components/form/add-ons/AddOns"
import Summary from "./components/form/summary/Summary"
import Success from "./components/form/success/Success"
import "../src/components/form/Forms.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/personal-info");
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PersonalInfo />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="select-plan" element={<SelectPlan />} />
          <Route path="add-ons" element={<AddOns />} />
          <Route path="summary" element={<Summary />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
