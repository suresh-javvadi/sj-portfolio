import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "../layout/AppLayout";
import About from "../pages/About";
import Experience from "../pages/Experience";
import ContactMe from "../pages/ContactMe";

const AppRoutes = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <About /> },
        { path: "/about", element: <About /> },
        { path: "/experience", element: <Experience /> },
        { path: "/contactme", element: <ContactMe /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
