import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) return <Spinner className=" w-8 h-8" color="purple" />

    if(user) return children

    return (
        <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivateRoute;