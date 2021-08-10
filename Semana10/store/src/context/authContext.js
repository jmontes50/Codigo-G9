import { useState, useEffect, createContext } from "react";

import { fire, auth, firebase } from "../config/Firebase";

import Loading from "../components/Loading";

const proveedorGoogle = new firebase.auth.GoogleAuthProvider()

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [userState, setUserState] = useState(null)
    const [authPending, setAuthPending] = useState(true)

    const signIn = async () => {
        const rpta = await auth.signInWithPopup(proveedorGoogle)
        // console.log("google!!",rpta)
    }

    useEffect(() => {
        return auth.onAuthStateChanged((user) => {
            setUserState(user)
            setAuthPending(false)
        })
    },[])

    if (authPending) {
        return <Loading/>
    }
    
    return (
        <AuthContext.Provider
            value={{signIn}}
        >
            {props.children}
        </AuthContext.Provider>
    )
}


