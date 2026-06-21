import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QrGenerator() {
  const [text, setText] = useState("");
  const qrRef = useRef(null);

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");

    if (!canvas) return;

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="tool-page">
      <div className="tool-container">
        <h2>QR Code Generator</h2>

        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <br />

        {text && (
          <>
            <div
              ref={qrRef}
              style={{
                margin: "20px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <QRCodeCanvas value={text} size={250} />
            </div>

            <button onClick={downloadQR}>
              Download QR Code
            </button>
          </>
        )}
      </div>
    </div>
  );
}