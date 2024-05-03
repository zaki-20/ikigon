import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Body from './components/Body.jsx';
import MessageForm from './components/MessageForm.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<>
      <Navbar />
      <Body />
      <Footer />
    </>
    ,
  },
  {
    path: "/message-form",
    element: 
    <>
      <Navbar />
      <MessageForm />
      <Footer />
    </>
   ,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
