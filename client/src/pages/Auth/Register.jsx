import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { BsFillExclamationOctagonFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authProvider/AuthProvider'
import { updateProfile } from 'firebase/auth'

const Register = () => {
  const navigate = useNavigate()
  const {createUser} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(true)
    const [input, setInput] = useState({
        name : '',
        email : '',
        password : '',
        photo : '',
    })

    // update input state on change
    const handleInputChange = (e) => {


        
        setInput((prev) => ( {
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    // check password Strength
    const handlePaswordStrength = (e) => {
      if (!input.password.match(/(?=.*?[A-Z])/)) {
        setPasswordStrength(false)
        return setError('At least one upper case')
      }
      if (!input.password.match(/(?=.*?[a-z])/)) {
        setPasswordStrength(false)
        return setError('At least one upper case!')
        
      }
      if (!input.password.match(/(?=.*?[0-9])/)) {
        setPasswordStrength(false)
        return setError('At least one digit!')
        
      }
      if (!input.password.match(/(?=.*?[#?!@$%^&*-])/)) {
        setPasswordStrength(false)
        return setError('At least one special character.')
        
      }
      if (!input.password.match(/.{8,}/)) {
        setPasswordStrength(false)
       return setError('Minimum Six in length')
        
      }
      setError('')
      setPasswordStrength(true)
      
    }
    // submit register form
    const handleRegister = async () => {
      try {
        if (!input.name || !input.email || !input.password || !input.photo) {
            setError('All fields Are Required!')
        }
        createUser(input.email, input.password)
      .then(userCredential => {
        updateProfile(userCredential.user, {
          displayName: `${input.name}`, photoURL: `${input.photo}`
        }).then(() => {
          // Profile updated!
          console.log('Updated');
          navigate('/')
        }).catch((error) => {
          setError(error.message)
        });
        
      })
      .catch(err => {
        console.log(err);
        setError(err.message)
      })
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className=' register-page'>



        <div className="container">
          <div className="row">
            <div className="col">
            <div className="sign-up-wrapper mx-auto  p-2  shadow-sm p-3">
          <div className="sign-up-box">
            <h2 className="text-center">Sign Up</h2>
            {/* Form Start */}

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Name
              </label>
              <input
                value={input.name}
                onChange={handleInputChange}
                name='name'
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Email address
              </label>
              <input
                value={input.email}
                onChange={handleInputChange}
                name='email'
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">
                Password
              </label>
              <input
                value={input.password}
                onChange={handleInputChange}
                onKeyUp={handlePaswordStrength}
                name='password'
                type="password"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Enter Password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput4" className="form-label">
                Photo URL
              </label>
              <input
                value={input.photo}
                onChange={handleInputChange}
                name='photo'
                type="text"
                className="form-control"
                id="exampleFormControlInput4"
                placeholder="Enter Photo URL"
              />
            </div>
            <div className="mb-3">
            {
              error && <p className="hav-account-link text-danger"><BsFillExclamationOctagonFill></BsFillExclamationOctagonFill> &nbsp;{error}</p>
            }
              <button disabled={!passwordStrength} className="btn btn-warning w-100" onClick={handleRegister}>Sign Up</button>
            </div>
            <p className="hav-account-link">Already has an account? <Link to={'/login'}>Sign in</Link></p>
         
          </div>
        </div>
            </div>
          </div>
        </div>



    </div>
  )
}

export default Register