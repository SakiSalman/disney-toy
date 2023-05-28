

import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";
import app from '../../firebase/firebase.config';
import axios from 'axios';
const provider = new GoogleAuthProvider();
const providers = new GithubAuthProvider();


// auth context
export const AuthContext = createContext(null)
// initialize app
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [recipe, setRecipe] = useState(null)
    const [chef, setChef] = useState(null)
    const [loading, setLoading] = useState(true);

    // Register User With Email
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login With eamil and password
    const emailPassLogin = (email, password) => {
      setLoading(true);
     return signInWithEmailAndPassword(auth, email, password)
    }
    // Login User WIth Google
    const loginUser = () => {
      setLoading(true);

      return signInWithPopup(auth, provider)

    }
    // Login with github
    const gitHubLogin = () => {
      setLoading(true);
      
      return signInWithPopup(auth, providers)
    }

  
    // Log Out
    const signOutUser = () =>{
      setLoading(true);

      return signOut(auth)
    }
    // check user
    useEffect( () => {
     
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
         if (user) {
           setUser(user)
           setLoading(false);
 
         }else{
          setLoading(false);
          
         } 
       });
       axios.get('https://hungry-sakisalman.vercel.app/recepe/')
       .then(res => {
         setRecipe(res.data.data)
       })
       .catch(err => {
         console.log(err);
       })
       axios.get('https://hungry-sakisalman.vercel.app/chef/')
       .then(res => {
         setChef(res.data.chef)
       })
       .catch(err => {
         console.log(err);
       })
       return () => unsubscribed()
 
     }, [])
    const authInfo = {
        createUser,
        loginUser,
        emailPassLogin,
        user,
        signOutUser,
        loading,
        recipe,
        chef,
        gitHubLogin
        
    }

  return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider