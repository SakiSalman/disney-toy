import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import AuthProvider from './providers/authprovider/AuthProvider';
import SweetToast from './providers/authprovider/SweetToast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <SweetToast>
    <RouterProvider router={router}></RouterProvider>
    </SweetToast>
   </AuthProvider>
  </React.StrictMode>,
)
