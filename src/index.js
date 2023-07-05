import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelSPage from "./pages/ModelSpage";
import ModelXPage from "./pages/ModelXpage";
import CybertruckPage from "./pages/CybertruckPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <HomePage />
      </App>
    ),
  },
  {
    path: "/model_s",
    element: (
      <App>
        <ModelSPage />
      </App>
    ),
  },
  {
    path: "/model_x",
    element: (
      <App>
        <ModelXPage />
      </App>
    ),
  },
  {
    path: "/cybertruck",
    element: (
      <App>
        <CybertruckPage />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
