import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PersonalInfo from "./components/form/personal-info/PersonalInfo";
import SelectPlan from "./components/form/select-plan/SelectPlan";
import AddOns from "./components/form/add-ons/AddOns";
import Summary from "./components/form/summary/Summary";
import Success from "./components/form/success/Success";
import "../src/components/form/Forms.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [fromValues, setFormValues] = useState({
    username: "",
    email: "",
    phone: "",
    plan: "",
    addons: [],
  });
  return (
    <main style={{ display: "flex", minHeight: "100vh" }}>
      <Home>
        <Routes>
          <Route path="/" element={<Navigate to="/personal-info" replace />} />
          <Route
            path="/personal-info"
            element={<PersonalInfo setFormValues={setFormValues} />}
          />
          <Route path="/select-plan" element={<SelectPlan />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route
            path="/summary"
            element={<Summary formValues={fromValues} />}
          />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Home>
    </main>
  );
}

export default App;
