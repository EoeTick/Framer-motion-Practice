import React, { Component, lazy } from "react";

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
const Example1 = lazy(() => import("./page/Example/Example1"));
const Example2 = lazy(() => import("./page/Example/scroll/Example2"));
const Example3 = lazy(() => import("./page/Example/scroll/Example3"));
const Example5 = lazy(() => import("./page/Example/scroll/Example5"));
const Coding1 = lazy(() => import("./page/Example/codingStartup/Example1"));
const Coding2 = lazy(() => import("./page/Example/codingStartup/Example2"));
const Coding3 = lazy(() => import("./page/Example/codingStartup/Example3"));
const Coding4 = lazy(() => import("./page/Example/codingStartup/Example4"));
const Coding5 = lazy(() => import("./page/Example/codingStartup/Example5"));
const Coding6 = lazy(() => import("./page/Example/codingStartup/Example6"));
const Like1 = lazy(() => import("./page/Example/like/Example1"));

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
    path: "/example5",
    element: <Example5 />,
  },
  {
    path: "/codingStartup/example1",
    element: <Coding1 />,
  },
  {
    path: "/codingStartup/example2",
    element: <Coding2 />,
  },
  {
    path: "/codingStartup/example3",
    element: <Coding3 />,
  },
  {
    path: "/codingStartup/example4",
    element: <Coding4 />,
  },
  {
    path: "/codingStartup/example5",
    element: <Coding5 />,
  },
  {
    path: "/codingStartup/example6",
    element: <Coding6 />,
  },
  {
    path: "/like/example1",
    element: <Like1 />,
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
