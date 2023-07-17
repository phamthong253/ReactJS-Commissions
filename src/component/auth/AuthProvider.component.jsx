import { createContext, useState } from "react";
import PropTypes from "prop-types"

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    return (
        <AuthContext.Provider value={{ auth, setAuth, user, setUser, loading, setLoading}}>
                {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;

AuthProvider.propTypes = {
children: PropTypes.object.isRequired
  };
  