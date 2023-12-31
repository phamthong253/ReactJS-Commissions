import { useContext } from "react";
import AuthContext from "../auth/AuthProvider.component";
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;