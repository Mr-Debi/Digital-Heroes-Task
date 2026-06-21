import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EmiCalculator from "./pages/EmiCalculator";
import GstCalculator from "./pages/GstCalculator";
import QrGenerator from "./pages/QrGenerator";
import PasswordGenerator from "./pages/PasswordGenerator";
import ResumeBuilder from "./pages/ResumeBuilder";
import PdfMerger from "./pages/PdfMerger";
import AgeCalculator from "./pages/AgeCalculator";
import JsonFormatter from "./pages/JsonFormatter";
import CurrencyConverter from "./pages/CurrencyConverter";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/emi" element={<EmiCalculator />} />
      <Route path="/gst" element={<GstCalculator />} />
      <Route path="/qr" element={<QrGenerator />} />
      <Route path="/password" element={<PasswordGenerator />} />
      <Route path="/resume" element={<ResumeBuilder />} />
      <Route path="/pdf" element={<PdfMerger />} />
      <Route path="/age" element={<AgeCalculator />} />
      <Route path="/json" element={<JsonFormatter />} />
      <Route path="/currency" element={<CurrencyConverter />} />
    </Routes>
  );
}

export default App;