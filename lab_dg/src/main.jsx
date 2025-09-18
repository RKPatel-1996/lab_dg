// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// The import now correctly points to the file we created
import HomePage from "./pages/HomePage.jsx";

// (We will create and import the other pages soon)
import ResearchPage from "./pages/ResearchPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import PublicationsPage from "./pages/PublicationsPage.jsx";
import PublishedMediaPage from "./pages/PublishedMediaPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const router = createBrowserRouter([
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
    path: "/publications", // Ensure this is also plural
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
