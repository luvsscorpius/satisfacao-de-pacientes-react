import React, {createContext, useState} from "react";

export const Context = createContext(null)

export const ContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState([])
    const [isChecked, setIsChecked] = useState(true)

    const contextValue = {userInfo, setUserInfo, isChecked, setIsChecked}
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}