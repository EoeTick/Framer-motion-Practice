import React, { Component, lazy } from 'react';

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import Home from './page/Home';
const Template = lazy(() => import('./component/Template'));

const Element = (props: any) => {
 

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "template",
    element: <Template />,
  },
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
