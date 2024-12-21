
import { Navigate, useLocation } from "react-router-dom";
import LoaderSpinner from "../components/LoaderSpinner/LoaderSpinner";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading}=useAuth();
    const location = useLocation();
    if(loading){
        return <LoaderSpinner></LoaderSpinner>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;