import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Home.jsx";
import AddCoffe from "./AddCoffe.jsx";
import UpdateCoffe from "./UpdateCoffe.jsx";
import Detail from "./Detail.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "/update",
        element: <UpdateCoffe></UpdateCoffe>,
      },
      {
        path: "/coffe/:id",
        element: <Detail></Detail>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
