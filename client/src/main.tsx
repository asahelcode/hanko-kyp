import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogoutBtn from "./components/Logout/index.tsx";
import Login from "./components/Login/index.tsx";
import { Home } from "./pages/index.ts";
import "semantic-ui-css/semantic.min.css";

const path = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <LogoutBtn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={path} />
  </React.StrictMode>
);
