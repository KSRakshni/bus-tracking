import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function AdminLogin() {
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
          width: "430px",
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
            position: "relative",
          }}
        >
          {/* ROUND LOGO */}

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

          {/* WEBSITE NAME */}

          <h1
            style={{
              fontSize: "40px",
              margin: 0,
              fontWeight: "bold",
              letterSpacing: "1px",
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

        {/* LOGIN SECTION */}

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
            Admin Login
          </h2>

          <input
            type="email"
            placeholder="Admin Email"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "18px",
              borderRadius: "14px",
              border: "1px solid #d1d5db",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
              background: "rgba(255,255,255,0.7)",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "25px",
              borderRadius: "14px",
              border: "1px solid #d1d5db",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
              background: "rgba(255,255,255,0.7)",
            }}
          />

          <button
            onClick={() => navigate("/dashboard")}
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
            Login
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Live Tracking • ETA • SOS • Alerts
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;