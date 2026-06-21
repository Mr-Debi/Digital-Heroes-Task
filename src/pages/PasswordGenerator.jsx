import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generate = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let pass = "";

    for (let i = 0; i < 12; i++) {
      pass += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(pass);
  };

  return (
    <div className="tool-page">
      <div className="tool-container">
      <h2>Password Generator</h2>

      <button onClick={generate}>
        Generate Password
      </button>

      <h3>{password}</h3>
    </div>
    </div>
  );
}