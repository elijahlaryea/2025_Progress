import { useEffect, useState } from "react";

function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  function handleGenerateRandomHexColor() {
    let hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexArray[randomColorUtility(hexArray.length)];
    }

    console.log(hexColor);

    setColor(hexColor);
  }

  useEffect(() => {
    if (typeOfColor === "hex") handleGenerateRandomHexColor;
    else handleGenerateRandomRgbColor;
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <div>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleGenerateRandomHexColor
              : handleGenerateRandomRgbColor
          }
        >
          Random Color Generator
        </button>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          margin: "20px",
        }}
      >
        <div>{typeOfColor}</div>
        <div>{color}</div>
      </div>
    </div>
  );
}

export default RandomColorGenerator;
