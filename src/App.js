import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Recent from "components/recent/Recent";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "pages/home/Home";
import Thumb from "pages/thumb/Thumb";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
        <Recent />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <Thumb />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
