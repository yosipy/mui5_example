import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import { TopPage } from "@/pages/TopPage/TopPage"
import { TwoColumnPage } from "./pages/layout/TwoColumnPage/TwoColumnPage"

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
    {
      path: "/layout/two_column",
      element: <TwoColumnPage />,
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
