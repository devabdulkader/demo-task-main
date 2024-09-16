import Main from "./layout/Main";

import HomePage from "./pages/HomePage";

import "./index.css";
import "./styles/fonts.css";

import ErrorPage from "./error-page";
const routes = [
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      // { path: "/about", element: <AboutPage /> },
      // { path: "/services", element: <ServicesPage /> },
      // { path: "/contact", element: <Contact /> },
    ],
  },
  // {
  //     path: "/dashboard",
  //     element: <Dashboard />, // Assuming Dashboard is a component
  //     children: [
  //         { path: "/", element: <DashboardHome /> }, // DashboardPage can be the default page for the dashboard
  //         { path: "/page1", element: <DashboardPage1 /> },
  //         { path: "/page2", element: <DashboardPage2 /> },
  //         // Add more dashboard pages as needed
  //     ]
  // }
];

export default routes;
