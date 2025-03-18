import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Templates from "./pages/Templates";
import Resume from "./pages/Resume";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "Your FullName",
    additionalLink: "Your link",
    linkedIn: "LinkedIn Account",
    email: "Email Address",
    website: "Portfolio Website",
    phone: "Contact Number",
    profile: "A brief summary about your self, skills and experience ",
  });

  const handleGeneralInfo = (field, value) => {
    setGeneralInfo((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard onChange={handleGeneralInfo} generalInfo={generalInfo} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
