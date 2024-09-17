import React, {createContext, useState} from "react";

export const Context = createContext(null)

export const ContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(`teste`)

    const contextValue = {userInfo, setUserInfo}
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}