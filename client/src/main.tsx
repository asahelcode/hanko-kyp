import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/index.tsx";
import { Home, League, Play } from "./pages/index.ts";
import "semantic-ui-css/semantic.min.css";
import {  Footer } from "./components/index.ts";

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
    path: "/play",
    element: <League />,
  },
  {
    path: "/play/:slug",
    element: <Play />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={path} />
    <Footer />
  </React.StrictMode>
);
