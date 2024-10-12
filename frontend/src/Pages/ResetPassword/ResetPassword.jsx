import React, { useContext, useState } from 'react'
import * as Home from '../Home/Styles'
import * as R from '../ResetPassword/Styles'
import { FaArrowLeft } from "react-icons/fa";
import { Context } from '../../Context/Context';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

export const ResetPassword = () => {
    const {navigate} = useContext(Context)

    // Pegando o token dos parametros
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('token')

    const [newPassword, setNewPassword] = useState('')

    const handleChangePaswword = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`http://localhost:2000/reset-password/${token}`, {newPassword})
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <Home.Content>
        <R.Info>
            <span onClick={() => navigate('/login')}>
                <FaArrowLeft/>
                <p>Voltar</p>
            </span>

            <h1>Redefinicao de senha!</h1>
        </R.Info>

        <Home.FormContainer>
            <Home.inputContainer>
                <Home.labelContent>
                    <p>Por favor, digite sua nova senha para completar o processo de redefinição.</p>
                </Home.labelContent>

                <Home.labelContent>
                    <label htmlFor="password">Nova senha:</label>
                    <input type="password" name="password" id="passwordreset" placeholder='Digite a nova senha' value={newPassword} onChange={(e)=> setNewPassword(e.target.value)} />
                </Home.labelContent>
            </Home.inputContainer>

            <Home.buttonContent>
                <Home.buttonAvancar onClick={(e) => handleChangePaswword(e)}>Redefinir</Home.buttonAvancar>
            </Home.buttonContent>
        </Home.FormContainer>
    </Home.Content>
  )
}
