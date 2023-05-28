import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authProvider/AuthProvider";
import { tostify } from "../../utility/tostify";
import { BsFillExclamationOctagonFill } from 'react-icons/bs'
import { useLocation, useNavigate } from "react-router-dom";
import { swalAert } from "../../utility/swAlert";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const { loginUser, emailPassLogin , gitHubLogin} = useContext(AuthContext);

  const [input, setInput] = useState({
   
    email : '',
    password : '',
})
      // update input state on change
      const handleInputChange = (e) => {


        
        setInput((prev) => ( {
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const from = location.state?.from?.pathname || "/";

    // login with email password
    const handleRegister = async () => {

        if (!input.email || !input.password ) {
           return setError('All fields Are Required!')
        }
        console.log('hello');
      emailPassLogin(input.email, input.password)
      .then(userCredential => {
        console.log(userCredential);
        tostify("suss", "Login Success!");
        navigate(from)
      })
      .catch(err => {
        swalAert(err.message)
        console.log(err.message);

      })
    }
    // Google Login
  const authGoogleLogin = () => {
    loginUser()
      .then((result) => {
        tostify("suss", "Login Success!");
      })
      .catch((error) => {
        swalAert(error.message)
      });
  };
    // Google Login
  const authGitHubLogin = () => {
    gitHubLogin()
      .then((result) => {
        tostify("suss", "Login Success!");
        navigate('/')
      })
      .catch((error) => {
        swalAert(error.message)
        console.log(error);
      });
  };
  return (
    <div className="login-section">
      <div className="container">
        <div className="login-wrapper  ">
          <div className="card shadow-sm">
            <div className="card-header">
              <h4 className="text-center">Login</h4>
            </div>
            <div className="card-body">


              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Your Email
                </label>
                <input
                  value={input.email}
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Your Password
                </label>
                <input
                  value={input.password}
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
            {
              error && <p className="hav-account-link text-danger"><BsFillExclamationOctagonFill></BsFillExclamationOctagonFill> &nbsp;{error}</p>
            }
              <button className="btn btn-warning w-100" onClick={handleRegister}>Sign In</button>
            </div>


              <button
                className="btn w-100 btn-lg border bg-success text-white"
                onClick={authGoogleLogin}
              >
                Login With Google
              </button>
              <button className="btn w-100 btn-lg border border-white bg-dark text-white" onClick={authGitHubLogin}>
                Login With Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
