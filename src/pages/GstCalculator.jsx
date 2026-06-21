import { useState } from "react";

export default function GstCalculator() {
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState("");
  const [total, setTotal] = useState("");

  const calculate = () => {
    const result =
      Number(amount) +
      (Number(amount) * Number(gst)) / 100;

    setTotal(result.toFixed(2));
  };

  return (
    <div className="tool-page">
      <div className="tool-container">
        <h2>GST Calculator</h2>

        <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
        <input placeholder="GST %" onChange={(e) => setGst(e.target.value)} />

        <button onClick={calculate}>Calculate</button>
        <h3>Total: ₹{total}</h3>
        </div>
    </div>
  );
}