import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "../layout/AppLayout";
import About from "../pages/About";
import ContactMe from "../pages/ContactMe";
import Skills from "../pages/Skills";

const Experience = lazy(() => import("../pages/Experience"));
const Projects = lazy(() => import("../pages/Projects"));

const AppRoutes = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <About /> },
        { path: "/about", element: <About /> },
        {
          path: "/experience",
          element: (
            <Suspense
              fallback={<div className="p-6 text-center">Loading...</div>}
            >
              <Experience />
            </Suspense>
          ),
        },
        { path: "/contactme", element: <ContactMe /> },
        { path: "/skills", element: <Skills /> },
        {
          path: "/projects",
          element: (
            <Suspense
              fallback={<div className="p-6 text-center">Loading...</div>}
            >
              <Projects />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
