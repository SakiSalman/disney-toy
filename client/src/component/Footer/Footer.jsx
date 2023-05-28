import React from 'react'
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <footer className='bg-light-green py-3'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className='m-0 text-md-start text-center'>© 2023 Hungry Recipe, All Rights Reserved</p>
          </div>
          <div className="col-12 col-md-6">
              <div className="icon-wrapper d-flex gap-2 justify-content-center justify-content-md-end
">
              <BsFacebook className='fs-5 cursor-pointer	'></BsFacebook>
              <BsInstagram className='fs-5 cursor-pointer	'></BsInstagram>
              <BsPinterest className='fs-5 cursor-pointer	'></BsPinterest>
              </div>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer