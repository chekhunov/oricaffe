// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";

import { initializeMockAdapter } from "./utils/mockApi";
import "./utils/i18n";

import App from "./App";

import "./scss/index.scss";
import "react-toastify/dist/ReactToastify.css";

initializeMockAdapter();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </BrowserRouter>
);
