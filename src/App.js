import React from "react";

export default function Quotable() {
  const [data, setData] = React.useState(null);

  async function updateQuote() {
    document.title = 'Random Quote';
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      console.error(error);
      setData({ content: "Opps... Something went wrong." });
    }
  }

  React.useEffect(() => {
    updateQuote();
  }, []);

  if (!data) return null;

  return (
    <div className="App">
      <h2>"{data.content}"</h2>
      <p>{data.author}</p>
      <span variant="primary" onClick={updateQuote}>
        Generate a Random Quote
      </span>
    </div>
  );
}