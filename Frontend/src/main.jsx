import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../index.css"; // index.css veliya irukradhala '../' pottu track panrom

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);