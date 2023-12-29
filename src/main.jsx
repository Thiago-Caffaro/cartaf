import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Cards from './pages/cards.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/cards',
    element: <Cards />,
  },
];

const router = createBrowserRouter({
  basename: process.env.NODE_ENV === 'production' ? '/carta' : '',
  routes: routes, // Certifique-se de passar o array de rotas corretamente
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
