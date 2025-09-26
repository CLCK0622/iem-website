import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Layout from "./Layout";
import Join from "./pages/Join";

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
        path: "teams",
        element: <Teams />,
      },
      {
        index: true,
        path: "join",
        element: <Join />,
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
