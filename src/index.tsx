import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { GameOverPage } from './pages/GameOverPage';
import { Game } from './pages/GamePage';
import { StartPage } from './pages/StartPage';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

const router = createBrowserRouter([
  {
    element: <StartPage />,
    path: '/',
  },
  {
    element: <Game />,
    path: 'game',
  },
  {
    element: <GameOverPage />,
    path: 'over',
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
