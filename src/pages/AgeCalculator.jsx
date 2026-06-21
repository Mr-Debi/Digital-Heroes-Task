import { useState } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor(
      (today - birthDate) / (1000 * 60 * 60 * 24)
    );

    setAge({
      years,
      months,
      days,
      totalDays,
    });
  };

  return (
    <div className="tool-page">
      <div className="tool-container">
        <h2>Age Calculator</h2>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <button onClick={calculateAge}>
          Calculate Age
        </button>

        {age && (
          <div className="result-box">
            <h3>Your Age</h3>

            <p>
              <strong>{age.years}</strong> Years,
              <strong> {age.months}</strong> Months,
              <strong> {age.days}</strong> Days
            </p>

            <p>
              Total Days Lived:
              <strong> {age.totalDays.toLocaleString()}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}