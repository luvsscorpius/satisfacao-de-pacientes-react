import React, { useContext } from 'react'
import * as Home from '../Home/Styles'
import * as F from './Styles'
import { FaArrowLeft } from "react-icons/fa";
import { Context } from '../../Context/Context';

export const ForgotPassword = () => {
    const {navigate} = useContext(Context)

  return (
    <Home.Content>
        <F.Info>
            <span onClick={() => navigate('/login')}>
                <FaArrowLeft/>
                <p>Voltar</p>
            </span>

            <h1>Redefinicao de senha!</h1>
        </F.Info>

        <Home.FormContainer>
            <Home.inputContainer>
                <Home.labelContent>
                    <p>Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
                </Home.labelContent>

                <Home.labelContent>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder='E-mail cadastrado'/>
                </Home.labelContent>
            </Home.inputContainer>

            <Home.buttonContent>
                <Home.buttonAvancar style={{width: '244px'}}>Enviar link de recuperação</Home.buttonAvancar>
            </Home.buttonContent>
        </Home.FormContainer>
    </Home.Content>
  )
}
