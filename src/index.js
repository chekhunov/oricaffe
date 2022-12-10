// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./utils/i18n";

import App from "./App";

import state from "./state/state";

import "./scss/index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <App appState={state} />
  // </StrictMode>
);
