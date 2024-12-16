import React from "react";
import "./styles.css";
import PasswordGenerator from "./PasswordGenerator";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Strong Password Generator</h1>
        <p>Create secure passwords effortlessly!</p>
      </header>
      <main>
        <PasswordGenerator />
      </main>
      <footer className="footer">
        <p>Tips: Use different passwords for different accounts.</p>
      </footer>
    </div>
  );
}

export default App;
