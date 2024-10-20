import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"

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

    const navigate = useNavigate()

    // Lógica no botao para avançar e mudar o currentStep
    const changeStep = (i, e) => {
        // Se i for menor que 0 ou maior ou igual ao tamanho do array
        if (i < 0 || i >= formComponents.length) return // se for fora dos limites nao faz nada

        // se I é um indice válido, atualiza o estado 'currentStep' com o novo indice
        setCurrentStep(i)
    }

    // Logica para enviar as informações para o backend
    const sendInfo = async (e) => {
        e.preventDefault()

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

        if (loginData.username === "" && loginData.password === "") {
            toast.warning('Preencha as informações')
        }

        try {
            const response = await axios.post('http://localhost:2000/login', { loginData },
                { headers: { 'Content-Type': 'application/json' } })

            if (response.status === 200) {
                const token = response.data.token
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                localStorage.setItem("@:token", token)
                if (isLembrarMe) {
                    localStorage.setItem("@:user", JSON.stringify(loginData));
                    sessionStorage.setItem("@:user", JSON.stringify(loginData));
                    localStorage.setItem("@:token", token)
                    sessionStorage.setItem("@:token", token)
                }
                navigate("/adm")
                getAllFeedBacks()
            }
        } catch (error) {
            if (error.response?.status === 401) {
                toast.error('Invalid credentials')
            } else {
                toast.error('An error has occurred')
            }
        }
    }

    // Function to logout user from admin page
    const logOutUser = () => {
        // limpando das memorias
        sessionStorage.removeItem("@:user")
        sessionStorage.removeItem("@:token")
        localStorage.removeItem("@:user")
        localStorage.removeItem("@:token")

        // tirando da header
        axios.defaults.headers.common["Authorization"] = '';

        // limpando dos estados
        setLoginData({username: '', password: ""})

        //Redirecionando
        navigate('/')
        toast.info("Você foi desconectado por motivos de segurança")
    }

    // Function to check if the token is still available
    const checkTokenExpiracy = () => {
        const token = localStorage.getItem("@:token")

        if (token) {
          const decoded = jwtDecode(token)
          const currentTime = Date.now() / 1000

          if (decoded.exp < currentTime) {
            console.log("Token expirado, deslogando...")
            logOutUser()
          }
        }
    }

    // Now using useEffect to check if tokenexpiracy
    useEffect(() => {
        checkTokenExpiracy()

        // Verificando a expiração
        const intervalCheck = setInterval(checkTokenExpiracy, 60000)

        return () => clearInterval(intervalCheck)
    })

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
        setAllFeedbacks,
        getAllFeedBacks,
        navigate
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}