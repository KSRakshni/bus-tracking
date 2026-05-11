import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // New Import
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageBuses from "./pages/ManageBuses";
import LostFound from "./pages/LostFound";
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Entry Point */}
        <Route path="/" element={<Home />} />

        {/* Student Routes */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        
        {/* Shared Routes */}
        <Route path="/lost-found" element={<LostFound />} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/manage-buses" element={<ManageBuses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;