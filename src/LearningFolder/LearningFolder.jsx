import React from "react";
import "./LearningFolder.css";
import { useState, useEffect, useRef } from "react";
const LearningFolder = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div id="learn">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </div>
    </div>
  );
};

export default LearningFolder;
