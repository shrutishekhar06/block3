import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      setQuote("Failed to fetch quote.");
      setAuthor("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();

    const intervalId = setInterval(() => {
      fetchQuote();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
      <h2>Daily Quote</h2>

      {loading ? (
        <div style={{ fontSize: "24px" }}>⏳ Loading...</div>
      ) : (
        <>
          <p style={{ fontStyle: "italic", fontSize: "20px" }}>"{quote}"</p>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>— {author}</p>
        </>
      )}

      <button onClick={fetchQuote} style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
        Get New Quote
      </button>
    </div>
  );
}

export default App;
