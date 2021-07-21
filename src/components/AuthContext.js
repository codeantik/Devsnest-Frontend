import React, { useState } from "react";

export const logInContext = React.createContext()

export const AuthContext = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLog = {
        log: isLoggedIn,
        checkLog: () => {
            console.log(handleLog.log)
            setIsLoggedIn(!isLoggedIn)
        }
    }

    return ( 
        <logInContext.Provider value={ handleLog }>
            { children }
        </logInContext.Provider>
     );
}
 