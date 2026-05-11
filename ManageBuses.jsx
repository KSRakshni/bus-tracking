import { useState } from "react";

function ManageBuses() {
  const [busNumber, setBusNumber] = useState("");
  const [driverName, setDriverName] = useState("");
  const [route, setRoute] = useState("");
  const [status, setStatus] = useState("");

  const [buses, setBuses] = useState([]);

  const addBus = () => {
    const newBus = {
      busNumber,
      driverName,
      route,
      status,
    };

    setBuses([...buses, newBus]);

    setBusNumber("");
    setDriverName("");
    setRoute("");
    setStatus("");
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#4f46e5" }}>Manage Buses</h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          marginTop: "20px",
          width: "500px",
        }}
      >
        <input
          type="text"
          placeholder="Bus Number"
          value={busNumber}
          onChange={(e) => setBusNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          placeholder="Driver Name"
          value={driverName}
          onChange={(e) => setDriverName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          placeholder="Route"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Status</option>
          <option>In Service</option>
          <option>Out of Service</option>
        </select>

        <button
          onClick={addBus}
          style={{
            width: "100%",
            padding: "12px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add Bus
        </button>
      </div>

      {/* Bus Table */}

      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>Bus List</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                Bus No
              </th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                Driver
              </th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                Route
              </th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {buses.map((bus, index) => (
              <tr key={index}>
                <td style={{ padding: "10px" }}>{bus.busNumber}</td>
                <td style={{ padding: "10px" }}>{bus.driverName}</td>
                <td style={{ padding: "10px" }}>{bus.route}</td>
                <td style={{ padding: "10px" }}>{bus.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBuses;