import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    const location =useLocation()
    if (loading) {
        return <span className="loading loading-spinner loading-xs"></span>
        
    }
    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivetRoute;