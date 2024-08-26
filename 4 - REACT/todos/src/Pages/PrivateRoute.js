import { useAuthContext } from 'Contexts/AuthContext'
import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({Component}) {
    const {isAuth}  = useAuthContext()
    
    if(!isAuth)  return <Navigate to={"/"} />
        
    return (<Component/>)
}
 