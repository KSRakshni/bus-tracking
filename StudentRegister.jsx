import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function StudentRegister() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #eef2ff, #dbeafe, #e0e7ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "460px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(12px)",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 10px 35px rgba(0,0,0,0.12)",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        {/* TOP SECTION */}

        <div
          style={{
            height: "240px",
            background:
              "linear-gradient(to bottom right, rgba(79,70,229,0.85), rgba(124,58,237,0.65))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <img
            src={logo}
            alt="Waypoint Logo"
            style={{
              width: "115px",
              height: "115px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "4px solid rgba(255,255,255,0.5)",
              padding: "5px",
              background: "white",
              marginBottom: "18px",
            }}
          />

          <h1
            style={{
              fontSize: "40px",
              margin: 0,
              fontWeight: "bold",
            }}
          >
            Waypoint
          </h1>

          <p
            style={{
              marginTop: "10px",
              opacity: 0.9,
              fontSize: "15px",
            }}
          >
            Smart Campus Bus Tracking
          </p>
        </div>

        {/* REGISTER SECTION */}

        <div
          style={{
            padding: "35px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#1f2937",
              marginBottom: "25px",
            }}
          >
            Student Registration
          </h2>

          <input
            type="text"
            placeholder="Student Name"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "16px",
              borderRadius: "14px",
              border: "1px solid #d1d5db",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <input
            type="email"
            placeholder="Student Email"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "16px",
              borderRadius: "14px",
              border: "1px solid #d1d5db",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "16px",
              borderRadius: "14px",
              border: "1px solid #d1d5db",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <input
            type="text"
            placeholder="Parent Contact Number"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "16px",
              borderRadius: "14px",
              border: "1px solid #d1d5db",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <input
            type="text"
            placeholder="Bus Stop"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "22px",
              borderRadius: "14px",
              border: "1px solid #d1d5db",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={() => navigate("/student-login")}
            style={{
              width: "100%",
              padding: "15px",
              background:
                "linear-gradient(to right, #4f46e5, #7c3aed)",
              color: "white",
              border: "none",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(79,70,229,0.3)",
            }}
          >
            Register
          </button>

          <p
            onClick={() => navigate("/student-login")}
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#4f46e5",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Already have an account? Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;