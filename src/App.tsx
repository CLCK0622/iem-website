import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Layout from "./Layout";
import Join from "./pages/Join";
import Cars from "./pages/Cars";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "home",
        element: <Home />,
      },
      {
        index: true,
        path: "about",
        element: <AboutUs />,
      },
      {
        index: true,
        path: "teams",
        element: <Teams />,
      },
      {
        index: true,
        path: "join",
        element: <Join />,
      },
      {
        index: true,
        path: "cars",
        element: <Cars />,
      },
    ],
  },
  {
    path: "",
    element: <Layout />,
    children: [{ index: true, path: "", element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
