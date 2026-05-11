import logo from "../assets/logo.png";

function StudentDashboard() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#eef2ff",
        fontFamily: "Arial",
      }}
    >
      {/* SIDEBAR */}

      <div
        style={{
          width: "250px",
          background: "rgba(79,70,229,0.9)",
          color: "white",
          padding: "25px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* LOGO */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <img
            src={logo}
            alt="Waypoint Logo"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid rgba(255,255,255,0.4)",
              background: "white",
              padding: "4px",
            }}
          />

          <h2 style={{ marginTop: "15px" }}>
            Waypoint
          </h2>

          <p
            style={{
              opacity: 0.8,
              fontSize: "14px",
            }}
          >
            Student Panel
          </p>
        </div>

        {/* MENU */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            🏠 Dashboard
          </div>

          <div
            style={{
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            🚌 Live Tracking
          </div>

          <div
            style={{
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            ⏰ ETA Prediction
          </div>

          <div
            style={{
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            🔔 Notifications
          </div>

          <div
            style={{
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            📦 Lost & Found
          </div>

          <div
            style={{
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            🆘 SOS
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div
        style={{
          flex: 1,
          padding: "35px",
        }}
      >
        {/* TOP */}

        <div>
          <h1
            style={{
              margin: 0,
              color: "#1f2937",
            }}
          >
            Student Dashboard
          </h1>

          <p style={{ color: "gray" }}>
            Welcome to Waypoint
          </p>
        </div>

        {/* STATUS CARDS */}

        <div
          style={{
            marginTop: "35px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
          }}
        >
          {/* CARD 1 */}

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ color: "gray" }}>
              Current Bus
            </h3>

            <h1 style={{ color: "#4f46e5" }}>
              21A
            </h1>
          </div>

          {/* CARD 2 */}

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ color: "gray" }}>
              Arrival Time
            </h3>

            <h1 style={{ color: "#4f46e5" }}>
              8 mins
            </h1>
          </div>

          {/* CARD 3 */}

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ color: "gray" }}>
              Crowd Level
            </h3>

            <h1 style={{ color: "#f59e0b" }}>
              Medium
            </h1>
          </div>
        </div>

        {/* LIVE STATUS */}

        <div
          style={{
            marginTop: "35px",
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          }}
        >
          <h2>Live Bus Status</h2>

          <p style={{ marginTop: "20px" }}>
            📍 Current Location: Main Gate
          </p>

          <p>
            🛣 Next Stop: Library Stop
          </p>

          <p>
            👥 Seats Available: 12
          </p>

          <p>
            🚦 Bus Status: On Time
          </p>
        </div>

        {/* SOS */}

        <div
          style={{
            marginTop: "35px",
            background: "#fee2e2",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2 style={{ color: "#dc2626" }}>
            Emergency SOS
          </h2>

          <p>
            Send emergency alert to admin instantly.
          </p>

          <button
            style={{
              marginTop: "15px",
              padding: "14px 24px",
              background: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send SOS Alert
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;