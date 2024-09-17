import React, {createContext, useState} from "react";

export const Context = createContext(null)

export const ContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const [isRequired, setIsRequired] = useState(true)

    const contextValue = {userInfo, setUserInfo, isChecked, setIsChecked, isRequired, setIsRequired}
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}