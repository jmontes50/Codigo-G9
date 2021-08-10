import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Route, Redirect } from "react-router-dom"

export default function ProtectedRoute({component: Component, ...rest}) {

    const { userState } = useContext(AuthContext)

    //Si el usuario no es null, lo doy pase
    if(userState){
        return (
            <Route {...rest} render={(props) => <Component {...rest} {...props}/> } />
        )
    }
    //si es null lo direcciono hacia el home
    return (
        <Redirect to="/" />
    )
}
