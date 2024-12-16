import React, { useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const generatePassword = () => {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
    };

    let characters = "";
    if (options.uppercase) characters += charset.uppercase;
    if (options.lowercase) characters += charset.lowercase;
    if (options.numbers) characters += charset.numbers;
    if (options.symbols) characters += charset.symbols;

    if (!characters) {
      setPassword("Select at least one option!");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(generatedPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="password-generator">
      <div className="password-display">
        <input type="text" value={password} readOnly />
        <button onClick={handleCopy}>Copy</button>
      </div>

      <div className="options">
        <label>
          Length:
          <input
            type="number"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.uppercase}
            onChange={() =>
              setOptions({ ...options, uppercase: !options.uppercase })
            }
          />
          Include Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.lowercase}
            onChange={() =>
              setOptions({ ...options, lowercase: !options.lowercase })
            }
          />
          Include Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.numbers}
            onChange={() =>
              setOptions({ ...options, numbers: !options.numbers })
            }
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.symbols}
            onChange={() =>
              setOptions({ ...options, symbols: !options.symbols })
            }
          />
          Include Symbols
        </label>
      </div>

      <button className="generate-btn" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
