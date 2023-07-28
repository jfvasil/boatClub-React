import { createContext, useState, useEffect} from "react";
import useRefreshToken from '../hooks/useRefreshToken'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})
    const refreshAccessToken = useRefreshToken()

    useEffect(() => {
        
        const refreshTokenInterval = setInterval(() => {
          refreshAccessToken();
        }, 25000); 
    
        return () => {
          clearInterval(refreshTokenInterval);
        };
      }, [refreshAccessToken]);

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext