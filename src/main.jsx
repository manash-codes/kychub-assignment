import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ProductCompareProvider } from "./context/ProductCompareContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ProductCompareProvider>
        <App />
      </ProductCompareProvider>
    </ThemeProvider>
  </StrictMode>
);
