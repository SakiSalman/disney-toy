import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import { swalAert } from '../../utility/swAlert'
import { tostify } from '../../utility/tostify'
import { useContext } from 'react'
import { AuthContext } from '../../context/authProvider/AuthProvider'
import { Tooltip as ReactTooltip } from 'react-tooltip'


const Header = () => {

  const navigate = useNavigate()
  const {user, signOutUser} = useContext(AuthContext)
  const logOut = () => {
    signOutUser()
    .then(() => {
      navigate('/')
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
  <div className="container">
    <img width={'150px'}   className="navbar-brand" to="/" src={logo}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  to={'/'} className={({ isActive }) => (isActive ? 'active-link nav-link fs-5' : 'nav-link fs-5')} aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/recipe'} className={({ isActive }) => (isActive ? 'active-link nav-link fs-5' : 'nav-link fs-5')} >Recipe</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to={'/chef'} className={({ isActive }) => (isActive ? 'active-link nav-link fs-5' : 'nav-link fs-5')} >Chef</NavLink>
        </li>
        {
          !user &&  <li className="nav-item">
          <NavLink  to={'/login'} className={({ isActive }) => (isActive ? 'active-link nav-link fs-5' : 'nav-link fs-5')} >Login</NavLink>
        </li>
        
        }
        {
          !user &&  <li className="nav-item">
          <NavLink  to={'/register'} className={({ isActive }) => (isActive ? 'active-link nav-link fs-5' : 'nav-link fs-5')} >Register</NavLink>
        </li>
        
        }
       
       
      </ul>
      <Link to={'/blog'} className='btn btn-success button' >Blog</Link>
      {user && <>
        <ul className='navbar-nav ms-auto'>
        <li className='nav-item' id="user-name" >
          <img width={'50px'} height={'50px'} style={{borderRadius : '100%'}} src={user.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjk3iDsjSh5GAXi6TQsADbOImS5LKjg8fred86MpTKEGfdWi_C7pyff4P7xyjuvp46V4&usqp=CAU"} alt="" />
          <ReactTooltip
        anchorId="user-name"
        place="bottom"
        content={`${user.displayName}`}
      />
        </li>
      </ul>
      <a href="" className="btn btn-danger" onClick={logOut}>Log Out</a>
      </>
      }
    </div>
  </div>
</nav>

    
    </>
  )
}

export default Header