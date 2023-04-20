import React from "react";
import { createRoot } from "react-dom/client"; // Updated import
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
createRoot(container).render(<App />);
