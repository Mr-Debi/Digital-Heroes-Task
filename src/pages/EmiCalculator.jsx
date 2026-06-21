import { useState } from "react";

export default function EmiCalculator() {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculateEMI = () => {
    const P = Number(loan);
    const R = Number(rate) / 12 / 100;
    const N = Number(years) * 12;

    const emi =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    setResult(emi.toFixed(2));
  };

  return (
    <div className="tool-page">
      <div className="tool-container">
      <h2>EMI Calculator</h2>

      <input placeholder="Loan Amount" onChange={(e) => setLoan(e.target.value)} />
      <input placeholder="Interest Rate %" onChange={(e) => setRate(e.target.value)} />
      <input placeholder="Years" onChange={(e) => setYears(e.target.value)} />

      <button onClick={calculateEMI}>Calculate</button>

      {result && <h3>Monthly EMI: ₹{result}</h3>}
    </div>
    </div>
  );
}