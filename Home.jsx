import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Home() {
  const navigate = useNavigate();

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #eef2ff, #dbeafe, #e0e7ff)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const cardContainerStyle = {
    display: "flex",
    gap: "30px",
    marginTop: "40px",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  const cardStyle = {
    width: "280px",
    background: "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(12px)",
    borderRadius: "24px",
    padding: "40px 20px",
    textAlign: "center",
    boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
    border: "1px solid rgba(255,255,255,0.4)",
    cursor: "pointer",
    transition: "transform 0.2s",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "12px 25px",
    background: "linear-gradient(to right, #4f46e5, #7c3aed)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%"
  };

  return (
    <div style={containerStyle}>
      <img src={logo} alt="Logo" style={{ width: "100px", marginBottom: "10px" }} />
      <h1 style={{ color: "#1e1b4b", marginBottom: "5px" }}>Waypoint</h1>
      <p style={{ color: "#4f46e5", fontWeight: "bold" }}>Bus Tracking System</p>

      <div style={cardContainerStyle}>
        {/* Student Option */}
        <div style={cardStyle} onClick={() => navigate("/student-login")}>
          <div style={{ fontSize: "40px", marginBottom: "15px" }}>🎓</div>
          <h2 style={{ color: "#1e1b4b" }}>Student</h2>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>Track your bus, check crowd levels, and report lost items.</p>
          <button style={buttonStyle}>Go to Student Portal</button>
        </div>

        {/* Admin Option */}
        <div style={cardStyle} onClick={() => navigate("/admin-login")}>
          <div style={{ fontSize: "40px", marginBottom: "15px" }}>🛡️</div>
          <h2 style={{ color: "#1e1b4b" }}>Admin</h2>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>Manage bus routes, drivers, and monitor emergency alerts.</p>
          <button style={buttonStyle}>Go to Admin Portal</button>
        </div>
      </div>
    </div>
  );
}

export default Home;