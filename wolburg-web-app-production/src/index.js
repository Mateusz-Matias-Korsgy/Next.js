import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import CartState from "./Contexts/Cart/CartState";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartState>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </CartState>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
