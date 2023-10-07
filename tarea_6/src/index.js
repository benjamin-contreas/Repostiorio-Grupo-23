import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Miembro1 from './pages/Miembro1'
import Miembro2 from './pages/Miembro2'
import Miembro3 from './pages/Miembro3'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "miembro1",
    element: <Miembro1 />,
  },
  {
    path: "miembro2",
    element: <Miembro2 />,
  },
  {
    path: "miembro3",
    element: <Miembro3 />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
