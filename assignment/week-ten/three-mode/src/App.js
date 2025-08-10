import React from "react";

function App() {
  const items = ["React", "JavaScript", "CSS"];

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>My Tech List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>  // Using index as key for simplicity
        ))}
      </ul>
    </div>
  );
}

export default App;
