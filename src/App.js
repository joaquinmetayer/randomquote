import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  document.title = "Random Quote";

  const [data, setData] = useState({
    content: "This is a loading quote message, amazing no?",
  });

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setData(data);
    } catch (error) {
      setData({ content: "Opps... Something went wrong." });
    }
  }

  // llamo a que genete updatequote una vez que se inicie
  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="App">
      <h2>"{data.content}"</h2>
      <p>{data.author}</p>
      <span onClick={updateQuote}>Generate a Random Quote</span>
    </div>
  );
}
