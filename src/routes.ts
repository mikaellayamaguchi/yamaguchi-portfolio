import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { RootLayout } from "./components/RootLayout";

// Resume and blog posts are split into their own chunks so the home page loads less code.
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "resume", lazy: () => import("./pages/Resume").then((m) => ({ Component: m.Resume })) },
      { path: "blog/:id", lazy: () => import("./pages/BlogPost").then((m) => ({ Component: m.BlogPost })) },
    ],
  },
]);
