import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authProvider/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import {  Puff } from 'react-loader-spinner'

const PrivetRoute = ({children}) => {
    const {loading, user, setLoading} = useContext(AuthContext)
    
    const location = useLocation()
if (loading) {
    return <div style={{width : '100%', height : '100vh', display : 'flex', justifyContent:'center', alignItems : 'center'}}>
        <Puff
  height="80"
  width="80"
  radius={1}
  color="#ffd662"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperclassName=""
  visible={true}
/>
    </div>
}
if (user) {
    return children
}
return <Navigate to={'/login'} state={{from: location}} replace></Navigate>

   

}
    

    


export default PrivetRoute