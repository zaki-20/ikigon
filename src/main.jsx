import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Body from "./components/Body.jsx";
import MessageForm from "./components/MessageForm.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import TermsAndCondition from "./components/TermsAndCondition.jsx";
import GDPR from "./components/GDPR.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Body />
        <Footer />
      </>
    ),
  },
  {
    path: "/message-form",
    element: (
      <>
        <Navbar />
        <MessageForm />
        <Footer />
      </>
    ),
  },
  {
    path: "/terms-and-conditions",
    element: (
      <>
        <Navbar />
        <TermsAndCondition />
        <Footer />
      </>
    ),
  },
  {
    path: "/gdpr",
    element: (
      <>
        <Navbar />
        <GDPR />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
