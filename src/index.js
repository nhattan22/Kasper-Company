import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <ToastContainer
      autoClose={5000}
      // hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      bodyClassName="toastBody"
      pauseOnFocusLoss
      draggable
      pauseOnHover
      position="top-right"
      bodyStyle={{ fontSize: "2rem" }}
    />
  </BrowserRouter>
);

reportWebVitals();
