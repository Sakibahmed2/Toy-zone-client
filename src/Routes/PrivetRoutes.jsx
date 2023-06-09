import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return <button className="btn loading ml-[570px] my-56">loading</button>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivetRoutes;