import React from 'react'
import { createBrowserRouter } from "react-router";
import Navbar from '../components/Navbar/Navbar';
import Root from '../pages/Root/Root';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root
  },
]);