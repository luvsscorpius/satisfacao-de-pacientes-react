import React, {createContext, useState} from "react";
import axios from 'axios'

export const Context = createContext(null)

export const ContextProvider = ({children, formComponents}) => {
    const [isChecked, setIsChecked] = useState(false)
    const [isRequired, setIsRequired] = useState(true)
    const [isReadOnly, setIsReadOnly] = useState(false)
    const [data, setData] = useState({isAnonymous: isChecked, name: "", email: "", review: "", comment: "", comeback: ""})

    const [currentStep, setCurrentStep] = useState(0)

    // Lógica no botao para avançar e mudar o currentStep
    const changeStep = (i, e) => {
        console.log(formComponents)

        // Se i for menor que 0 ou maior ou igual ao tamanho do array
        if (i < 0 || i >= formComponents.length) return // se for fora dos limites nao faz nada

        // se I é um indice válido, atualiza o estado 'currentStep' com o novo indice
        setCurrentStep(i)
    }

    // Logica para enviar as informações para o backend
    const sendInfo = async (e) => {
        e.preventDefault()
        console.log('Enviei')
        console.log(data)

        try {
           const response = await axios.put("http://localhost:2000/createFeedBack", data, {
                headers: { 'Content-Type': 'application/json' }
            })

            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    console.log("O passo: ", currentStep)

    const contextValue = {
        data, 
        setData, 
        isChecked, 
        setIsChecked, 
        isRequired, 
        setIsRequired, 
        currentStep, 
        setCurrentStep, 
        changeStep, 
        sendInfo,
        isReadOnly,
        setIsReadOnly}
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}