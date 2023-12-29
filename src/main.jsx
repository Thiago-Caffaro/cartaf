import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Cards from './pages/cards.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter({
  basename: process.env.NODE_ENV === 'production' ? '/carta' : '',
  routes: [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/cards',
      element: <Cards />,
    },
  ],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
