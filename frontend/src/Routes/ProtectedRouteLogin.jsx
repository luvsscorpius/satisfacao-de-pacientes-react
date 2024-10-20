import React, { useContext, useEffect } from 'react'
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// Rota protegida para só permitir ir para a rota adm se estiver logado
export const ProtectedRouteLogin = ({children}) => {
  const {loginData} = useContext(Context)

  const navigate = useNavigate()

  useEffect(() => {
    if (loginData.username === "" && loginData.password === "") {
        toast.error('Forbidden')
        navigate('/login')
        return 
      }
  }, [loginData])

  return children;
}
