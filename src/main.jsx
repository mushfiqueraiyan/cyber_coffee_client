import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthProvider.jsx";
import RestrictedPage from "./components/RestrictedPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("https://cyber-coffee-client.vercel.app/coffees").then((res) =>
            res.json()
          ),
      },
      {
        path: "/add-coffee",
        element: (
          <RestrictedPage>
            <AddCoffee />
          </RestrictedPage>
        ),
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://cyber-coffee-client.vercel.app/coffees/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
