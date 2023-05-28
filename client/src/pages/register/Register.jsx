/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from 'bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { updateProfile } from 'firebase/auth'
import { authContext } from '../../providers/authprovider/AuthProvider'
import { ToastContext } from '../../providers/authprovider/SweetToast'
import CustomTitle from '../../components/CustomTitle'

const Register = () => {
  const {loginUser}=useContext(authContext)
  const {successToast,alertToast,wrongToast}=useContext(ToastContext)
  
  const navigate=useNavigate();
  
  const handleRegister=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photo=form.photo.value;
    console.log(name,email,password,photo);
    //validate the password 
    if(!email || !password || !name || !photo){
      alertToast()
      return;
    }
    else {
      loginUser(email,password)
      .then(result=>{
        const user=result.user;
        updateNameAndPhoto(user,name,photo)
        form.reset();
      })
      .catch(error=>{
        wrongToast()

        console.log(error);
      }
      )
    }

  }

  // update name and photo
  const updateNameAndPhoto=(user,name,photo)=>{
    updateProfile(user,{
      displayName:name,
      photoURL:photo
    })
    .then(result=>{
      successToast();
      navigate('/');
    }
    )
    .catch(error=>{
      alertToast();
    }
    )
  }
  return (

    <>
      <CustomTitle title={'Register'}>

      </CustomTitle>
      <Container>
      <Row className='justify-content-center'>
        <Col className='justify-content-center shadow p-5 my-5' md={5}>
        <form onSubmit={handleRegister}>
          <h3 className='text-center'>Register</h3>
        <div className="mb-3">
            <label  className="form-label">Name</label>
            <input name='name' type="text" className="form-control"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input name="email" type="email" className="form-control"/>
            <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label  className="form-label">Password</label>
            <input name='password' type="password" className="form-control"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Photo</label>
            <input name='photo' type="text" className="form-control"/>
          </div>
          <button style={{backgroundColor: "#617A55" ,borderRadius:"4px"}}  type="submit" className="btn text-light mb-3 ">Register</button>
       </form>
       <h5 className='text-center mt-2'>I have already account ? <Link style={{color: "#617A55"}} className='text-decoration-none' to={'/login'}> Login</Link></h5>
        </Col>
      </Row>
    </Container>
    
    </>
    
  )
}

export default Register