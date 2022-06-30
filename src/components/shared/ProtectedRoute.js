import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useAuth } from '../../contexts/AuthContext';


// isAllowed is a boolean that decides if  user can use this path
//    - for exmaple if they need to be logged in, i would pass in isAllowed={!!user} (a boolean if they are a user)
function ProtectedRoute({redirectPath, isAllowed, childern}) {

    const { currentUser } =  useAuth();

    if  (!currentUser && isAllowed) {
        return  <Navigate to={redirectPath} replace />;
    }
    return childern ? childern : <Outlet />
}

ProtectedRoute.defaultProps = {
    isAllowed  :  true,
    redirectPath : '/'
}

ProtectedRoute.propTypes = {
    isAllowed: PropTypes.bool,
    redirectPath: PropTypes.string
}

export default ProtectedRoute