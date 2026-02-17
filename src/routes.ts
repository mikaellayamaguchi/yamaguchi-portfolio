import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { RootLayout } from "./components/RootLayout"; 

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "resume", Component: Resume },
    ],
  },
]);