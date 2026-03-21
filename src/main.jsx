import { createRoot } from "react-dom/client";
import { Agentation } from "agentation";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    {import.meta.env.DEV ? <Agentation /> : null}
  </>,
);
