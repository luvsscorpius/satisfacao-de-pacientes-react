import {useContext, useEffect} from 'react'
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router-dom'

export const ProtectedRoute = ({children, stepRequired}) => {
    const {currentStep} = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        if (currentStep <= stepRequired) {
           
            // Mapear o currentStep para uma rota existente
            const stepRoutes = [
                '/',                  // Step 0
                '/avaliacao',         // Step 1
                '/avaliacao/avalie',  // Step 2
                '/avaliacao/envio' ,   // Step 3
            ]

            // Se currentStep for 1, ele retornara '/avaliacao'
            // Se currentStep for 2, ele retornara '/avaliacao/avalie' e assim por diante
            navigate(stepRoutes[currentStep])
        } 
    }, [currentStep, stepRequired, navigate])

    // Se o currentStep for maior ou = ao stepRequired ele retorna os filhos que seriam as rotas, caso contrário retorna null
  return currentStep >= stepRequired ? children : null
}
