import React, {createContext, useState} from "react";

export const Context = createContext(null)

export const ContextProvider = ({children, formComponents}) => {
    const [userInfo, setUserInfo] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const [isRequired, setIsRequired] = useState(true)

    const [currentStep, setCurrentStep] = useState(0)

    console.log(formComponents)
    console.log(currentStep)

    const changeCurrentStep = (i, e) => {
        e.preventDefault()

        if (i < 0 || i >= i.length) return 

        setCurrentStep(1)
    }

    const contextValue = {userInfo, setUserInfo, isChecked, setIsChecked, isRequired, setIsRequired, currentStep, setCurrentStep, changeCurrentStep}
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}