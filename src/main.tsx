import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import App from "./App"
import { TopPage } from "@/pages/TopPage/TopPage"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <TopPage />,
    },
    {
      path: "/app",
      element: <App />,
    },
  ],
  // For Github Pages
  { basename: import.meta.env.DEV ? "/" : "/mui5_example/" }
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
