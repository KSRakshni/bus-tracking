import logo from "../assets/logo.png";

function AdminDashboard() {
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
          width: "260px",
          background: "rgba(79,70,229,0.9)",
          backdropFilter: "blur(10px)",
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

          <h2 style={{ marginTop: "15px" }}>Waypoint</h2>

          <p
            style={{
              opacity: 0.8,
              fontSize: "14px",
            }}
          >
            Smart Transit Admin
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
            onClick={() => window.location.href = "/dashboard"}
            style={{
              cursor: "pointer",
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            📊 Dashboard
          </div>

          <div
            onClick={() => window.location.href = "/manage-buses"}
            style={{
              cursor: "pointer",
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            🚌 Manage Buses
          </div>

          <div
            style={{
              cursor: "pointer",
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            🗺 Routes
          </div>

          <div
            style={{
              cursor: "pointer",
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            🚨 SOS Alerts
          </div>

          <div
            style={{
              cursor: "pointer",
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            <div
  onClick={() => window.location.href = "/lost-found"}
  style={{
    cursor: "pointer",
    padding: "12px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.1)",
  }}
>
  📦 Lost & Found
</div>
          </div>

          <div
            style={{
              cursor: "pointer",
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            🔔 Notifications
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
        {/* TOP BAR */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "35px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                color: "#1f2937",
              }}
            >
              Admin Dashboard
            </h1>

            <p style={{ color: "gray" }}>
              Welcome back to Waypoint
            </p>
          </div>

          <button
            onClick={() =>
              (window.location.href = "/manage-buses")
            }
            style={{
              padding: "12px 20px",
              borderRadius: "12px",
              border: "none",
              background: "#4f46e5",
              color: "white",
              cursor: "pointer",
            }}
          >
            + Add Bus
          </button>
        </div>

        {/* CARDS */}

        <div
          style={{
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
            <h3 style={{ color: "gray" }}>Total Buses</h3>

            <h1 style={{ color: "#4f46e5" }}>12</h1>
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
            <h3 style={{ color: "gray" }}>Students Active</h3>

            <h1 style={{ color: "#4f46e5" }}>350</h1>
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
            <h3 style={{ color: "gray" }}>SOS Alerts</h3>

            <h1 style={{ color: "#ef4444" }}>2</h1>
          </div>
        </div>

        {/* RECENT ALERTS */}

        <div
          style={{
            marginTop: "35px",
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          }}
        >
          <h2>Recent Alerts</h2>

          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#fef2f2",
              borderRadius: "12px",
            }}
          >
            🚨 Bus 21 delayed by 15 minutes
          </div>

          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              background: "#eff6ff",
              borderRadius: "12px",
            }}
          >
            🚌 Route 5 bus assigned successfully
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;