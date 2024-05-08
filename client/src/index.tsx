import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import "./index.css";
import { Paths } from "./path";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";

const router = createBrowserRouter([
  { path: Paths.home, element: <h1>Employees</h1> },
  { path: Paths.login, element: <Login /> },
  { path: Paths.register, element: <Register /> },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
