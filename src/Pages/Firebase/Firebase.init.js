import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initializedAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializedAuthentication;