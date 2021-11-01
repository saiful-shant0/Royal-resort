import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';




const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="container text-center my-4 p-5 ">
            <h3>Plase LogIn</h3>
            <button
                className="btn btn-success"
                onClick={handleGoogleLogin}
            >Google Sign In</button>
        </div>
    );
};

export default LogIn;