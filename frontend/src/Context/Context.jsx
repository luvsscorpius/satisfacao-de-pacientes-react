import React, {createContext, useState} from "react";

export const Context = createContext(null)

export const ContextProvider = ({children, formComponents}) => {
    const [data, setData] = useState({name: "", email: ""})
    const [isChecked, setIsChecked] = useState(false)
    const [isRequired, setIsRequired] = useState(true)

    const [currentStep, setCurrentStep] = useState(0)

    // Lógica no botao para avançar e mudar o currentStep
    const changeStep = (i, e) => {
        console.log(formComponents)

        // Se i for menor que 0 ou maior ou igual ao tamanho do array
        if (i < 0 || i >= formComponents.length) return // se for fora dos limites nao faz nada

        // se I é um indice válido, atualiza o estado 'currentStep' com o novo indice
        setCurrentStep(i)
    }

    console.log("O passo: ", currentStep)

    const contextValue = {data, setData, isChecked, setIsChecked, isRequired, setIsRequired, currentStep, setCurrentStep, changeStep}
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}