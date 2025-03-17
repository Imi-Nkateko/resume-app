import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Templates from "./pages/Templates";
import Resume from "./pages/Resume";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </div>
  );
}

export default App;
