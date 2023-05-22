import React, { Component, lazy } from "react";

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Example1 from "./page/Example/Example1";
import Example2 from "./page/Example/scroll/Example2";
import Example3 from "./page/Example/scroll/Example3";
import Example4 from "./page/Example/scroll/Example4";
import Example5 from "./page/Example/scroll/Example5";
import Codrops1 from "./page/Example/codrops/Example1";
import Coding1 from "./page/Example/codingStartup/Example1";
import Home from "./page/Home/Home";
// const Template = lazy(() => import('./component/Template'));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/example1",
    element: <Example1 />,
  },
  {
    path: "/example2",
    element: <Example2 />,
  },
  {
    path: "/example3",
    element: <Example3 />,
  },
  {
    path: "/example4",
    element: <Example4 />,
  },
  {
    path: "/example5",
    element: <Example5 />,
  },

  {
    path: "/codrops/example1",
    element: <Codrops1 />,
  },
  {
    path: "/codingStartup/example1",
    element: <Coding1 />,
  },
  // {
  //   path: "template",
  //   element: <Template />,
  // },
];

const router = createBrowserRouter(routes);

const Router: React.FC = () => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </>
  );
};

export default Router;
