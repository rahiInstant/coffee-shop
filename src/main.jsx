import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Home.jsx";
import AddCoffe from "./AddCoffe.jsx";
import UpdateCoffe from "./UpdateCoffe.jsx";
import Detail from "./Detail.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://coffe-shop-backend.vercel.app/add"),
      },
      {
        path: "/add",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "/update/:id",
        element: <UpdateCoffe></UpdateCoffe>,
        // loader: ({ params }) =>
        //   fetch(`https://coffe-shop-backend.vercel.app/add/${params.id}`),
      },
      {
        path: "/coffee/:id",
        element: <Detail></Detail>,
        loader: ({ params }) =>
          fetch(`https://coffe-shop-backend.vercel.app/add/${params.id}`),
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
