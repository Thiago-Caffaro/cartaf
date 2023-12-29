import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cards from './pages/cards.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
