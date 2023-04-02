import React, { Component, lazy } from "react";

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Example1 from "./page/Example/Example1";
import Example2 from "./page/Example/Example2";
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
