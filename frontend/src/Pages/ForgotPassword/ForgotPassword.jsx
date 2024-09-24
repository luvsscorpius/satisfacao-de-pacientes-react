import React from 'react'
import * as Home from '../Home/Styles'
import * as F from './Styles'
import { FaArrowLeft } from "react-icons/fa";

export const ForgotPassword = () => {
  return (
    <Home.Content>
        <F.Info>
            <span>
                <FaArrowLeft/>
                <p>Voltar</p>
            </span>

            <h1>Redefinicao de senha!</h1>
        </F.Info>
    </Home.Content>
  )
}
