import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./rotas/Contatos/Contact"
import Home from "./rotas/Home"
import Informacoes from './rotas/Informacoes/informacoes';
import Servicos from './rotas/Serviços/servicos';
import Sobre from './rotas/Sobre/sobre';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Informacoes />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/services",
          element: <Servicos />
        },
        {
          path: "/about",
          element: <Sobre />
        }
      ]
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);