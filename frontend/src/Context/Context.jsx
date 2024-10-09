import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Context = createContext(null)

export const ContextProvider = ({ children, formComponents }) => {
    const [isChecked, setIsChecked] = useState(false)
    const [isRequired, setIsRequired] = useState(true)
    const [isReadOnly, setIsReadOnly] = useState(false)
    const [data, setData] = useState({ isAnonymous: isChecked, name: "", email: "", review: "", comment: "", comeback: "" })
    const [loginData, setLoginData] = useState(
        JSON.parse(localStorage.getItem("@:user")) || JSON.parse(sessionStorage.getItem("@:user")) || { username: "", password: "" }
    );
    
    const [isLembrarMe, setIsLembrarMe] = useState(false)

    const [currentStep, setCurrentStep] = useState(0)
    const [allFeedbacks, setAllFeedbacks] = useState({}) 
    localStorage.clear(); // For localStorage

    const navigate = useNavigate()

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

            if (response.status === 201) {
                toast.success('Feedback enviado com sucesso')
                navigate('/')
                setCurrentStep(0)
                setData({ name: "", email: "", review: "", comment: "", comeback: "" })
            } else {
                toast.error('Ocorreu algum erro, tente novamente em alguns instantes')
            }
        } catch (error) {
            console.error(error)
        }
    }

    // Pegar todos os feedbacks para criar um dashBoard
    const getAllFeedBacks = async () => {
        try {
            const response = await axios.get("http://localhost:2000/feedbacks")
            setAllFeedbacks(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    // Funcao para login na pagina de adm da psicologa
    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(loginData)

        if (loginData.username === "" && loginData.password === "") {
            toast.warning('Preencha as informações')
        }

        try {
            const response = await axios.post('http://localhost:2000/login', { loginData },
                { headers: { 'Content-Type': 'application/json' } })

            if (response.status === 200) {
                const token = response.data.token
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                if (isLembrarMe) {
                    localStorage.setItem("@:user", JSON.stringify(loginData));
                    sessionStorage.setItem("@:user", JSON.stringify(loginData));
                }
                navigate("/adm")
                getAllFeedBacks()
            }
        } catch (error) {
            if (error.status === 401) {
                toast.error('Invalid credentials')
            } else {
                toast.error(error)
            }
        }
    }

    // const allFeedbacksFormatted = [...reviewValueAnon, ...reviewValueNon]

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
        setIsReadOnly,
        handleLogin,
        loginData,
        setLoginData,
        isLembrarMe,
        setIsLembrarMe,
        allFeedbacks,
        setAllFeedbacks
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}