import React from 'react'
import { Navigate } from 'react-router-dom'
import Signin from '../Components/Signin/Signin'
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoutes({children}) {
    let token=localStorage.getItem('token')
try {
    const decoded = jwtDecode(token);
    console.log(decoded);
    if(decoded.role !='user'){
        localStorage.clear()
    return < Navigate to='/Signin'/> 
    }
}
catch (error){
    localStorage.clear()
    return < Navigate to='/Signin'/>   
}
    if(token) return children
    return (
   < Navigate to='/Signin'/>
  )
}


