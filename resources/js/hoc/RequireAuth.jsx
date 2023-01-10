import {useLocation, Navigate} from "react-router-dom";
import Main from "../pages/main/Main";

const RequireAuth = ({children}) => {
    let user = localStorage.getItem('user')

    if (!user) {
        return <Navigate to={'/login'}/>
    }

    return <Main>{children}</Main>;
}

export default RequireAuth
