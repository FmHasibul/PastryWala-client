import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase.config'
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)


const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const gitHubLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userProfileInfo = (userData) => {
        return updateProfile(auth, userData);
    }

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (loginUser) => {
            setUser(loginUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const authUser = { user, setUser, loading, setLoading, LogOut, emailLogin, googleProvider, gitHubLogin, userProfileInfo, createUser }
    return (

        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider>

    );
};



export default Authprovider;