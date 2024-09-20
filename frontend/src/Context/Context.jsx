import React, {createContext, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext(null)

export const ContextProvider = ({children, formComponents}) => {
    const [userInfo, setUserInfo] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const [isRequired, setIsRequired] = useState(true)

    const [currentStep, setCurrentStep] = useState(0)

    const location = useLocation()

    // Lógica no botao para avançar e mudar o currentStep
    const changeStep = (i, e) => {
        console.log(formComponents)

        // Se i for menor que 0 ou maior ou igual ao tamanho do array
        if (i < 0 || i >= formComponents.length) return // se for fora dos limites nao faz nada

        // se I é um indice válido, atualiza o estado 'currentStep' com o novo indice
        setCurrentStep(i)
    }

    const contextValue = {userInfo, setUserInfo, isChecked, setIsChecked, isRequired, setIsRequired, currentStep, setCurrentStep, changeStep}
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}