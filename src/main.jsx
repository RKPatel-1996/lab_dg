// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/HomePage.jsx";
import ResearchPage from "./pages/ResearchPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import PublicationsPage from "./pages/PublicationsPage.jsx";
import PublishedMediaPage from "./pages/PublishedMediaPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

// You correctly imported this
import { ThemeProvider } from "./theme/ThemeProvider";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/research",
      element: <ResearchPage />,
    },
    {
      path: "/team",
      element: <TeamPage />,
    },
    {
      path: "/publications",
      element: <PublicationsPage />,
    },
    {
      path: "/media",
      element: <PublishedMediaPage />,
    },
    {
      path: "/resources",
      element: <ResourcesPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ],
  {
    basename: "/lab_dg/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 👇 Wrap the RouterProvider with your ThemeProvider here 👇 */}
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
