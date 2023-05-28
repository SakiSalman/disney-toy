import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/authProvider/AuthProvider.jsx";
import router from "./router/router.jsx";
import 'react-tooltip/dist/react-tooltip.css'
import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import "swiper/css/pagination";
  import 'bootstrap/dist/js/bootstrap.bundle.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
