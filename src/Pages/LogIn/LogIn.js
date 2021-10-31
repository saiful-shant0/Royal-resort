import React from 'react';
import useAuth from '../../Hooks/useAuth';




const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {

            })
    }
    return (
        <div className="container my-4 p-5 ">
            <button
                className="btn-regular"
                onClick={handleGoogleLogin}
            >Google Sign In</button>
        </div>
    );
};

export default LogIn;