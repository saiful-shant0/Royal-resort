import { useEffect, useState } from "react"


import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializedAuthentication from "../Pages/Firebase/Firebase.init";

initializedAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth()

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })

    }
    const logOut = () => {

        signOut(auth)
            .then(() => {
                setUser({})
            })

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }

        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut

    }

}

export default useFirebase;