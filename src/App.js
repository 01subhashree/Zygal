import React, { useState } from "react";
import "./App.css";

function App() {
  const [boxCount, setBoxCount] = useState(0);
  const [boxSize, setBoxSize] = useState(null);
  const [boxes, setBoxes] = useState([]);

  const handleGenerateBoxes = () => {
    if (boxCount % 2 !== 0 || boxCount <= 0) {
      alert("Please enter a valid even number greater than 0.");
      return;
    }

    const newBoxes = Array.from({ length: boxCount }, (_, index) => index + 1);
    setBoxes(newBoxes);

    setBoxSize(100 / boxCount);
  };

  return (
    <div className="App">
      <div className="input-container">
        <input
          type="number"
          value={boxCount}
          onChange={(e) => setBoxCount(parseInt(e.target.value, 10))}
        />
        <button onClick={handleGenerateBoxes}>Generate</button>
      </div>
      <div className="box-container">
        {boxes.map((index) => (
          <div
            key={index}
            className="black-box"
            style={{
              width: `${boxSize}%`,
              height: `${boxSize}%`,
              transform: `translate(${(boxCount - index) * 100}%, ${
                (boxCount - index) * 100
              }%)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
