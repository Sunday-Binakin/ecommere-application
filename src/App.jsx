import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './pages/products';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from'./pages/home/'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/products",
      element: <Products />
    }
  ]);
  return <RouterProvider router={router} />
}

export default App
 