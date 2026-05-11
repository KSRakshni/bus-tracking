import { useState } from "react";

function LostFound() {
  const [itemName, setItemName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");

  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      itemName,
      location,
      contact,
    };

    setItems([...items, newItem]);

    setItemName("");
    setLocation("");
    setContact("");
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#eef2ff",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#4f46e5" }}>
        📦 Lost & Found
      </h1>

      {/* FORM */}

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "25px",
          width: "500px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
        }}
      >
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Found Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={addItem}
          style={{
            width: "100%",
            padding: "14px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add Item
        </button>
      </div>

      {/* ITEMS LIST */}

      <div
        style={{
          marginTop: "35px",
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
        }}
      >
        <h2>Reported Items</h2>

        {items.length === 0 ? (
          <p style={{ color: "gray" }}>
            No items reported yet.
          </p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              style={{
                marginTop: "20px",
                padding: "18px",
                background: "#f9fafb",
                borderRadius: "12px",
              }}
            >
              <h3>{item.itemName}</h3>

              <p>📍 {item.location}</p>

              <p>📞 {item.contact}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LostFound;