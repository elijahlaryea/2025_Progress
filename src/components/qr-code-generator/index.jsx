import { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [qrValue, setQrValue] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateCode() {
    setQrValue(input);
    setInput("");
  }

  return (
    <div>
      <div>QR Code Generator</div>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter value here"
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateCode}
        >
          Generate Code
        </button>
      </div>
      <div>
        <QRCode value={qrValue} />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
