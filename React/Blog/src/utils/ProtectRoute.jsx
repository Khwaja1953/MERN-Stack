import React from 'react'
import { Route, Navigate, replace } from 'react-router-dom';

const ProtectRoute = ({children}) => {
    

    const token = localStorage.getItem("token");
 return token ? children : <Navigate to="/login" replace />;
}

export default ProtectRoute