import { useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";




const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null);
    const auth = getAuth(app)
    const createUserEP =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const provider= new GoogleAuthProvider();
    const googleLogin=()=>{
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const userCheck=onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser)
        })
        return ()=>{
            userCheck();

        }
    },[])
   
    const updateUser=(name,photo)=>{
        return updateProfile(auth.currentUser,{
             displayName:name, photoURL:photo
        })
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signout=()=>{
        return signOut(auth)
    }
    const forgetPass=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    const authInfo={
        createUserEP,
        user,
        googleLogin,
        updateUser,
        signout,
        signIn,
        forgetPass,
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>
}
export default AuthProvider;