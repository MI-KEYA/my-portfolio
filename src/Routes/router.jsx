import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      }
    ]
  },
]);

export default router;