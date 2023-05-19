import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {

    const {user, lodading} = useContext(AuthContext)
    const location = useLocation()

    if(lodading){
        return 'loading ...'
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivetRoutes;