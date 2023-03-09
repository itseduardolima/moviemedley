import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';


import Details from './pages/Details';
import App from './App';
import Home from './pages/Home';
import Releases from './pages/Films/Releases';
import InTheaters from './pages/Films/InTheaters';
import WellRated from './pages/Films/WellRated';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
    element: <Home/>,
      },
      {
        path:"/details/:id",
        element: <Details/>,
      },
      {
        path:"/releases",
        element: <Releases/>,
      },
      {
        path:"/inTheaters",
        element: <InTheaters/>,
      },
      {
        path:"/wellRated",
        element: <WellRated/>,
      }
      
      
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

