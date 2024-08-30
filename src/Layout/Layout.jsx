import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Layout = () => {

    const location = useLocation()
    const {isLoading} = useContext(AuthContext)

    const isAutLayOut = location?.pathname?.includes('login') || location?.pathname?.includes('register')

    // console.log(isAutLayOut);

    if(isLoading) return


    if(isAutLayOut) return <Outlet />
    

    return (
        <div>
            <NavBar />
            <Outlet/>
            <Footer />
        </div>
    );
};

export default Layout;