import React from 'react';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="radial-progress" style={{ "--value": 80 }}>80%</div>
    }


    if (!user?.uid) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    else return children;

};

export default PrivateRoutes;