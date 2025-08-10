import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");

  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    cursor: "pointer"
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={navStyle}>
        <span onClick={() => setPage("Home")}>Home</span>
        <span onClick={() => setPage("About")}>About</span>
        <span onClick={() => setPage("Contact")}>Contact</span>
      </nav>

      {/* Page Content */}
      <div style={{ padding: "20px" }}>
        {page === "Home" && <h1>Welcome to Home</h1>}
        {page === "About" && <h1>About Us</h1>}
        {page === "Contact" && <h1>Contact Us</h1>}
      </div>
    </div>
  );
}

export default App;
