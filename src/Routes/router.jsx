import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import AboutMe from '../Components/AboutMe/AboutMe';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Education from '../Components/Education/Education';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      },
      {
        path: '/aboutMe',
        Component: AboutMe
      },
      {
        path: '/skills',
        Component: Skills
      },
      {
        path: '/projects',
        Component: Projects
      },
      {
        path: '/education',
        Component: Education

      }
    ]
  },
]);

export default router;