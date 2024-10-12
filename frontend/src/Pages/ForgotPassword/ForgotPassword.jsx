import React, { useContext, useState } from 'react'
import * as Home from '../Home/Styles'
import * as F from './Styles'
import { FaArrowLeft } from "react-icons/fa";
import { Context } from '../../Context/Context';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ForgotPassword = () => {
    const {navigate} = useContext(Context)

    const {token} = useParams()
    const [email, setEmail] = useState('')

    const handlePasswordReset = async (e) => {
        e.preventDefault()
        try {   
            const response = await axios.post('http://localhost:2000/request-password-reset', {email})
            console.log(response)
        } catch (error) {
            if (error.status === 400) {
                toast.error('Usuário não encontrado')
            }
        }
    }

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
                    <input type="email" name="email" id="email" placeholder='E-mail cadastrado' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Home.labelContent>
            </Home.inputContainer>

            <Home.buttonContent>
                <Home.buttonAvancar style={{width: '244px'}} onClick={(e) => handlePasswordReset(e)}>Enviar link de recuperação</Home.buttonAvancar>
            </Home.buttonContent>
        </Home.FormContainer>
    </Home.Content>
  )
}
