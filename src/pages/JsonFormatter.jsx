import { useState } from "react";

export default function JsonFormatter() {
  const [json, setJson] = useState("");
  const [output, setOutput] = useState("");

  const formatJson = () => {
    try {
      const formatted = JSON.stringify(
        JSON.parse(json),
        null,
        4
      );

      setOutput(formatted);
    } catch {
      setOutput("Invalid JSON");
    }
  };

  return (
    <div className="tool-page">
      <div className="tool-container">
      <h2>JSON Formatter</h2>

      <textarea
        rows="10"
        cols="50"
        onChange={(e) => setJson(e.target.value)}
      />

      <br />

      <button onClick={formatJson}>
        Format
      </button>

      <pre>{output}</pre>
    </div>
    </div>
  );
}