import React from 'react'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'



const Layout = ({children}) => {

  return (
    <>  
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    <Header></Header>
    <Outlet/>
    <Footer></Footer>
    </>
  )
}

export default Layout