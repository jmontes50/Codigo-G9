import { useState, useEffect, createContext } from "react";

import { fire, auth } from "../config/Firebase";

import Loading from "../components/Loading";

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [userState, setUserState] = useState(null)
    const [authPending, setAuthPending] = useState(true)

}