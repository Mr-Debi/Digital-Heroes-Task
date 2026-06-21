import { useEffect, useState } from "react";
import axios from "axios";

export default function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const [result, setResult] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    fetchRates();

    const interval = setInterval(() => {
      fetchRates();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const fetchRates = async () => {
    try {
      const response = await axios.get(
        "https://open.er-api.com/v6/latest/USD"
      );

      setRates(response.data.rates);
      setCurrencies(
        Object.keys(response.data.rates).sort()
      );

      setUpdatedAt(new Date().toLocaleString());
    } catch (error) {
      console.error("Exchange API Error:", error);
    }
  };

  const convertCurrency = () => {
    if (!amount || !rates[from] || !rates[to]) return;

    const usdAmount = amount / rates[from];
    const convertedAmount = usdAmount * rates[to];

    setResult(convertedAmount.toFixed(2));
  };

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
  };

  const getRate = () => {
    if (!rates[from] || !rates[to]) return 0;

    return (rates[to] / rates[from]).toFixed(4);
  };

  return (
    <div className="tool-page">
      <div className="tool-container">

        <h2>💱 Real-Time Currency Converter</h2>

        <div className="result-box">
          <h3>Popular Exchange Rates</h3>

          <p>USD → INR : {rates.INR}</p>
          <p>USD → EUR : {rates.EUR}</p>
          <p>USD → GBP : {rates.GBP}</p>
          <p>USD → AED : {rates.AED}</p>
          <p>USD → JPY : {rates.JPY}</p>
        </div>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <select
          value={from}
          onChange={(e) =>
            setFrom(e.target.value)
          }
        >
          {currencies.map((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency}
            </option>
          ))}
        </select>

        <button
          onClick={swapCurrencies}
          style={{ margin: "10px 0" }}
        >
          🔄 Swap
        </button>

        <select
          value={to}
          onChange={(e) =>
            setTo(e.target.value)
          }
        >
          {currencies.map((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency}
            </option>
          ))}
        </select>

        <button onClick={convertCurrency}>
          Convert Currency
        </button>

        {result && (
          <div className="result-box">
            <h3>
              {amount} {from}
            </h3>

            <h1>
              {result} {to}
            </h1>

            <p>
              Exchange Rate:
              {" "}
              1 {from} = {getRate()} {to}
            </p>
          </div>
        )}

        <div className="result-box">
          <h3>Live Currency Information</h3>

          <p>
            Base Currency: USD
          </p>

          <p>
            Available Currencies:
            {" "}
            {currencies.length}
          </p>

          <p>
            Last Updated:
            {" "}
            {updatedAt}
          </p>
        </div>

        <div className="result-box">
          <h3>
            All Live Exchange Rates
          </h3>

          <div
            style={{
              maxHeight: "350px",
              overflowY: "auto",
              textAlign: "left",
            }}
          >
            {Object.entries(rates).map(
              ([currency, value]) => (
                <p key={currency}>
                  <strong>{currency}</strong>
                  {" : "}
                  {value}
                </p>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  );
}