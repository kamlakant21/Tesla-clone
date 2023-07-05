import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelSPage from "./pages/ModelSpage";
import ModelXPage from "./pages/ModelXpage";
import CybertruckPage from "./pages/CybertruckPage";
import App from "./App";
import ShopPage from "./pages/ShopPage";
import { RecoilRoot } from "recoil";
import CartPage from "./pages/CartPage";

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
  {
    path: "/shop",
    element: (
      <App>
        <ShopPage />
      </App>
    ),
  },
  {
    path: "/cart",
    element: (
      <App>
        <CartPage />
      </App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
